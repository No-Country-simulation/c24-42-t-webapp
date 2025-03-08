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
    public String uploadImage(MultipartFile multipartFile, String publicIdPrefix) throws IOException {
        File file = FileService.convertToFile(multipartFile);
        boolean isValid = FileService.isValidExtension(file);
        if(!isValid){
            throw new RuntimeException("Extensión inválida");
        }
        Map uploadResult = cloudinary.uploader().upload(file, ObjectUtils.asMap("public_id", publicIdPrefix + file.getName()));
        file.delete();
        return uploadResult.get("url").toString();
    }

    @Override
    public void deleteImage(String publicId) throws IOException {
        cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
    }
}
