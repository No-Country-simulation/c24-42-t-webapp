package com.healthcare.domain.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {
    ResponseEntity<?> getImage(Long id);
    ResponseEntity<?> getImageDx(Long id);
    ResponseEntity<?> createImage(MultipartFile file);
    ResponseEntity<?> createImageDx(MultipartFile file, Long diagnosticId);
    ResponseEntity<?> deleteImage(Long id);
    ResponseEntity<?> deleteImageDx(Long id);
}
