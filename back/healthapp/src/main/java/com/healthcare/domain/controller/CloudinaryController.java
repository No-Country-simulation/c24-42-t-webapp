package com.healthcare.domain.controller;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.healthcare.domain.service.ICloudinaryService;

@RestController
@RequestMapping("/api/v1/cloudinary")
public class CloudinaryController {

    @Autowired
    private ICloudinaryService cloudinaryService;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/image/upload")
    public ResponseEntity<?> uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("prefix") String prefix) {
        try {
            Map<?, ?> cloudinaryResponse = cloudinaryService.uploadImage(file, prefix);
            return ResponseEntity.ok(cloudinaryResponse);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al subir la imagen"));
        }
    }

    @PostMapping("/image/destroy")
    public ResponseEntity<?> destroyImage(@RequestParam("public_id") String publicId) {
        try {
            Map<?, ?> cloudinaryResponse = cloudinaryService.deleteImage(publicId);
            return ResponseEntity.ok(cloudinaryResponse);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al eliminar la imagen"));
        }
    }

}
