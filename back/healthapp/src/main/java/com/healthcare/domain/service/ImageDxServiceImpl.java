package com.healthcare.domain.service;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.healthcare.domain.model.entity.ImagesDx;
import com.healthcare.domain.repository.ImagesDxRepository;

import jakarta.transaction.Transactional;

@Service
public class ImageDxServiceImpl implements IImagesDxService{

    @Autowired
    private ImagesDxRepository imagesDxRepository;
    @Autowired
    private CloudinaryServiceImpl cloudinaryService;

    @Override
    public ResponseEntity<?> getImageDx(Long id) {
        Optional<ImagesDx> image = imagesDxRepository.findById(id);
        return image.map(value -> ResponseEntity.ok(Map.of("image", (Object) value)))
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada")));
    }

    @Transactional
    public ResponseEntity<?> createImageDx(MultipartFile multipartFile) {
        try{
            Map<?, ?> cloudinaryResponse = cloudinaryService.uploadImage(multipartFile, "imagesDx/");
            String imageUrl = (String) cloudinaryResponse.get("url");
            ImagesDx image = new ImagesDx(null, LocalDate.now(), imageUrl, null);
            imagesDxRepository.save(image);
            return ResponseEntity.ok(Map.of("message", "Imagen subida con éxito", "image", image));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al subir la imagen"));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", e.getMessage()));
        }
    }

    @Transactional
    public ResponseEntity<?> deleteImageDx(Long id) {
        Optional<ImagesDx> image = imagesDxRepository.findById(id);
        if (image.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada"));
        }
        ImagesDx imageGet = image.get();
        try {
            String publicId = imageGet.getUrl().substring(imageGet.getUrl().lastIndexOf('/') + 1, imageGet.getUrl().lastIndexOf('.'));
            cloudinaryService.deleteImage(publicId);
            imagesDxRepository.delete(imageGet);
            return ResponseEntity.ok(Map.of("message", "Imagen eliminada correctamente"));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al eliminar la imagen"));
        }
    }
}
