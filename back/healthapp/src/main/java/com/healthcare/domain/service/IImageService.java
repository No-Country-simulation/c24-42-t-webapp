package com.healthcare.domain.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface IImageService {
    ResponseEntity<?> getImage(Long id);
    ResponseEntity<?> createImage(MultipartFile multipartFile);
    ResponseEntity<?> deleteImage(Long id);
}
