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

import com.healthcare.domain.service.IImagesDxService;

@RestController
@RequestMapping("/api/v1/images-dx")
public class ImageDxController {

    @Autowired
    private IImagesDxService imagesDxService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getImageDx(@PathVariable Long id) {
        return imagesDxService.getImageDx(id);
    }

    @PostMapping
    public ResponseEntity<?> createImageDx(@RequestParam("file") MultipartFile file) {
        return imagesDxService.createImageDx(file);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImageDx(@PathVariable Long id) {
        return imagesDxService.deleteImageDx(id);
    }
}
