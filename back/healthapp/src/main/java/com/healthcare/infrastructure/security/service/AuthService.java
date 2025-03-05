package com.healthcare.infrastructure.security.service;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.IncorrectClaimException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.exceptions.MissingClaimException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.healthcare.domain.repository.UserRepository;
import com.healthcare.infrastructure.dto.request.RequestLoginDTO;
import com.healthcare.infrastructure.dto.request.UserAuthenticated;
import com.healthcare.infrastructure.dto.response.ResponseTokenDTO;
import com.healthcare.infrastructure.security.utils.JwtUtils;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AuthService implements UserDetailsService {


    private final UserRepository userRepository;

    private final JwtUtils jwtUtils;

    /**
     * Checks whether the user exists or not, if exists it converts User to
     * UserAuthenticated
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .map(UserAuthenticated::new)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));
    }

    /**
     * 
     * @param token JWT token after login
     * @throws UsernameNotFoundException      if user was not found in database
     * @throws IllegalArgumentException       if user is null
     * @throws AlgorithmMismatchException     if the algorithm stated in the token's
     *                                        header is not equal to
     *                                        the one defined in the
     *                                        {@link JWTVerifier}.
     * @throws SignatureVerificationException if the signature is invalid.
     * @throws TokenExpiredException          if the token has expired.
     * @throws MissingClaimException          if a claim to be verified is missing.
     * @throws IncorrectClaimException        if a claim contained a different value
     *                                        than the expected one.
     * @throws JWTVerificationException
     * 
     */
    public void validateUserToken(String token) {
        var validToken = jwtUtils.verifyToken(token);
        var userDetails = loadUserByUsername(validToken.getSubject());
        jwtUtils.loadSecurityContext(userDetails);
    }

    /**
     * <p>
     * This method checks step by step calling the repository to retrieve the user
     * object
     * <p>
     * Then we check if the raw password and the encoded password matches
     * <p>
     * After that we save into the SecurityContext the authentication of the User
     * <p>
     * Finally we generate a new JWT and send it with a HTTP STATUS CODE 200
     * 
     * @param login json with username and password
     * @return jwt token
     * @throws UsernameNotFoundException If user was not found
     * @throws BadCredentialsException   Password doesnt match user or is invalid
     */
    public ResponseEntity<ResponseTokenDTO> loginUser(RequestLoginDTO login) {
        UserAuthenticated userDetails = (UserAuthenticated) loadUserByUsername(login.email());
        jwtUtils.passwordMatches(login, userDetails);
        jwtUtils.loadSecurityContext(userDetails);
        String createdToken = jwtUtils.createToken(userDetails);
        return ResponseEntity.ok(new ResponseTokenDTO(createdToken));
    }
}
