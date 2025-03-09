package com.healthcare.domain.service;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

@Component
public class CloudinaryServiceImpl implements ICloudinaryService {

    @Autowired
    private Cloudinary cloudinary;

    @Override
    public Map<?, ?> uploadImage(MultipartFile multipartFile, String publicIdPrefix) throws IOException {
        File file = FileService.convertToFile(multipartFile);
        if(!FileService.isValidExtension(file)){
            FileService.deleteFile(file);
            throw new IllegalArgumentException("Extensión de imagen inválida");
        }
        Map<?, ?> uploadResult = cloudinary.uploader().upload(file, ObjectUtils.asMap("public_id", publicIdPrefix + file.getName()));
        return uploadResult;
    }

    @Override
    public Map<?, ?> deleteImage(String publicId) throws IOException {
        try {
            Map<?, ?> result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            return result;
        } catch (IOException e) {
            System.err.println("Error al eliminar la imagen en Cloudinary: " + e.getMessage());
            e.printStackTrace();
            return Map.of("error", "Error al eliminar la imagen: " + e.getMessage());
        }
    }
}
