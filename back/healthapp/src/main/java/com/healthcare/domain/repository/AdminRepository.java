package com.healthcare.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthcare.domain.model.entity.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin,Long>{

}
