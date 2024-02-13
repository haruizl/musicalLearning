package com.example.musicalLearningController.Repo;
import com.example.musicalLearningController.Entity.DocumentType;
import com.example.musicalLearningController.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@EnableJpaRepositories
@Repository
public interface DocumentTypeRepo extends JpaRepository<DocumentType,Integer>{
}
