package com.healthcare.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.healthcare.domain.service.ICloudinaryService;

@RestController
@RequestMapping("/api/v1/image")
public class CloudinaryController {

    @Autowired
    private ICloudinaryService cloudinaryService;


}
