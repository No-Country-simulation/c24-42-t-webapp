package com.healthcare.domain.service;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.healthcare.domain.model.entity.Image;
import com.healthcare.domain.model.entity.ImagesDx;
import com.healthcare.domain.repository.ImageRepository;
import com.healthcare.domain.repository.ImagesDxRepository;

@Service
public class CloudinaryServiceImpl implements ICloudinaryService {
    
    @Autowired
    private Cloudinary cloudinary;
    @Autowired
    private ImagesDxRepository imagesDxRepository;
    @Autowired
    private ImageRepository imageRepository;

    private static List<String> ALLOWED_MIME_TYPES = List.of("image/jpeg", "image/png", "image/gif");

    public CloudinaryServiceImpl(Cloudinary cloudinary, ImagesDxRepository imagesDxRepository, ImageRepository imageRepository){
        this.cloudinary = cloudinary;
        this.imagesDxRepository = imagesDxRepository;
        this.imageRepository = imageRepository;
    }

    @Override
    public ResponseEntity<?> getImage(Long id) {
        Optional<Image> image = imageRepository.findById(id);
        return image.map(value -> ResponseEntity.ok(Map.of("image", (Object) value)))
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada")));
    }

    @Override
    public ResponseEntity<?> getImageDx(Long id) {
        Optional<ImagesDx> image = imagesDxRepository.findById(id);
        return image.map(value -> ResponseEntity.ok(Map.of("image", (Object) value)))
                    .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada")));
    }

    @Override
    @Transactional
    public ResponseEntity<?> createImage(MultipartFile file){
        if (!ALLOWED_MIME_TYPES.contains(file.getContentType())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Formato de imagen no permitido"));
        }
        try {
            Map uploadImage = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = uploadImage.get("url").toString();

            Image image = new Image(null, LocalDate.now(), imageUrl);
            imageRepository.save(image);

            return ResponseEntity.ok(Map.of("message", "Imagen subida con éxito", "image", image));
        } catch (IOException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al subir la imagen"));
        }
    }

    @Override
    @Transactional
    public ResponseEntity<?> createImageDx(MultipartFile file, Long diagnosticId) {
        if (!ALLOWED_MIME_TYPES.contains(file.getContentType())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(Map.of("error", "Formato de imagen no permitido"));
        }

        try {
            Map uploadImageDx = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());
            String imageUrl = uploadImageDx.get("url").toString();

            ImagesDx imageDx = new ImagesDx(null, LocalDate.now(), imageUrl, null);
            imagesDxRepository.save(imageDx);

            return ResponseEntity.ok(Map.of("message", "Imagen de diagnóstico subida con éxito", "image", imageDx));
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Error al subir la imagen"));
        }
    }

    @Override
    @Transactional
    public ResponseEntity<?> deleteImage(Long id) {
        Optional<Image> imageOpt = imageRepository.findById(id);
        if (imageOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada"));
        }

        Image image = imageOpt.get();
        deleteFromCloudinary(image.getUrl());
        imageRepository.delete(image);

        return ResponseEntity.ok(Map.of("message", "Imagen eliminada correctamente"));
    }

    @Override
    @Transactional
    public ResponseEntity<?> deleteImageDx(Long id) {
        Optional<ImagesDx> imageDxOpt = imagesDxRepository.findById(id);
        if (imageDxOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("error", "Imagen no encontrada"));
        }

        ImagesDx imageDx = imageDxOpt.get();
        deleteFromCloudinary(imageDx.getUrl());
        imagesDxRepository.delete(imageDx);

        return ResponseEntity.ok(Map.of("message", "Imagen de diagnóstico eliminada correctamente"));
    }

    private void deleteFromCloudinary(String imageUrl) {
        try {
            String publicId = imageUrl.substring(imageUrl.lastIndexOf('/') + 1, imageUrl.lastIndexOf('.'));
            cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
        } catch (IOException e) {
            throw new RuntimeException("Error al eliminar la imagen en Cloudinary", e);
        }
    }

}
