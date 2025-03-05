package com.healthcare.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.healthcare.domain.model.entity.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {

}
