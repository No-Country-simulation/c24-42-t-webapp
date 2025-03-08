package com.healthcare.domain.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface IImagesDxService {
    ResponseEntity<?> getImageDx(Long id);
    ResponseEntity<?> createImageDx(MultipartFile file);
    ResponseEntity<?> deleteImageDx(Long id);
}
