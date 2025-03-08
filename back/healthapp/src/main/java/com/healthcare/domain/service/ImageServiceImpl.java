package com.healthcare.domain.service;

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

import com.healthcare.domain.model.entity.Image;
import com.healthcare.domain.repository.ImageRepository;

import jakarta.transaction.Transactional;

@Service
public class ImageServiceImpl implements IImageService {

    @Autowired
    private ImageRepository imageRepository;
    @Autowired
    private CloudinaryServiceImpl cloudinaryService;

    private static List<String> ALLOWED_MIME_TYPES = List.of("image/jpeg", "image/png", "image/gif");

    @Override
    public ResponseEntity<?> getImage(Long id) {
        Optional<Image> image = imageRepository.findById(id);
        return image.map(value -> ResponseEntity.ok(Map.of("image", (Object) value)))
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada")));
    }

    @Transactional
    public ResponseEntity<?> createImage(MultipartFile file) {
        if (!ALLOWED_MIME_TYPES.contains(file.getContentType())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Formato de imagen no permitido"));
        }
        try{
            String imageUrl = cloudinaryService.uploadImage(file, "images/");
            Image image = new Image(null, LocalDate.now(), imageUrl);
            imageRepository.save(image);
            return ResponseEntity.ok(Map.of("message", "Imagen subida con éxito", "image", image));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al subir la imagen"));
        }
    }

    @Transactional
    public ResponseEntity<?> deleteImage(Long id) {
        Optional<Image> imageOpt = imageRepository.findById(id);
        if (imageOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada"));
        }
        Image image = imageOpt.get();
        try {
            String publicId = image.getUrl().substring(image.getUrl().lastIndexOf('/') + 1, image.getUrl().lastIndexOf('.'));
            cloudinaryService.deleteImage(publicId);
            imageRepository.delete(image);
            return ResponseEntity.ok(Map.of("message", "Imagen eliminada correctamente"));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al eliminar la imagen"));
        }
    }
}
