package com.healthcare.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.domain.model.entity.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
