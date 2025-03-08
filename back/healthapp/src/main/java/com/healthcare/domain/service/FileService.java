package com.healthcare.domain.service;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

class FileService {

private FileService() { }

    public static File convertToFile(MultipartFile multipartFile) throws IOException{
        File file = new File(multipartFile.getOriginalFilename());
        FileUtils.writeByteArrayToFile(file, multipartFile.getBytes());
        return file;
    }

    private static String getExtension(File file) {
        String originalFileName = FilenameUtils.getBaseName(file.getName());
        return file.getName().replace(originalFileName + ".", "");
    }

    public static boolean isValidExtension(File file) {
        String fileExtension = getExtension(file);
        return switch (fileExtension) {
            case "jpg", "webp", "png", "jpeg" -> true;
            default -> false;
        };
    }

}
