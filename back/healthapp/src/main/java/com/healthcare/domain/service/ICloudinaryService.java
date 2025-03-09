package com.healthcare.domain.service;

import java.io.IOException;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;

public interface ICloudinaryService {
    Map<?, ?> uploadImage(MultipartFile multipartFile, String publicIdPrefix) throws IOException;

    Map<?, ?> deleteImage(String publicId) throws IOException;

}
