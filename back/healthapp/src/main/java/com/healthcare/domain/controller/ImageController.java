package com.healthcare.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.healthcare.domain.service.IImageService;

@RestController
@RequestMapping("/api/v1/images")
public class ImageController {

    @Autowired
    private IImageService imageService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getImage(@PathVariable Long id) {
        return imageService.getImage(id);
    }

    @PostMapping
    public ResponseEntity<?> createImage(@RequestParam("file") MultipartFile file) {
        return imageService.createImage(file);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id) {
        return imageService.deleteImage(id);
    }
}
