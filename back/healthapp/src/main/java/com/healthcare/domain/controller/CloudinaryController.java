package com.healthcare.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.healthcare.domain.service.ICloudinaryService;

@RestController
@RequestMapping("/api/v1/image")
public class CloudinaryController {

    @Autowired
    private ICloudinaryService cloudinaryService;

    @GetMapping("/{id}")
    public ResponseEntity<?> getImage(@PathVariable Long id){
        return cloudinaryService.getImage(id);
    }

    @GetMapping("/dx/{id}")
    public ResponseEntity<?> getImageDx(@PathVariable Long id){
        return cloudinaryService.getImageDx(id);
    }

    @PostMapping
    public ResponseEntity<?> createImage(@RequestBody MultipartFile file){
        return cloudinaryService.createImage(file);
    }

    @PostMapping("/dx/{diagnosticId}")
    public ResponseEntity<?> createImageDx(@RequestParam("file") MultipartFile file, @PathVariable Long diagnosticId) {
        return cloudinaryService.createImageDx(file, diagnosticId);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id){
        return cloudinaryService.deleteImage(id);
    }

    @DeleteMapping("/dx/{id}")
    public ResponseEntity<?> deleteImageDx(@PathVariable Long id){
        return cloudinaryService.deleteImageDx(id);
    }

}
