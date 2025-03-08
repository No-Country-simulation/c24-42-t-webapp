package com.healthcare.domain.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {
    public String uploadImage(MultipartFile file, String publicIdPrefix) throws IOException;

    public void deleteImage(String publicId) throws IOException;

}
