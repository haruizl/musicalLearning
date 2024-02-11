package com.example.musicalLearningController.Repo;
import com.example.musicalLearningController.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@EnableJpaRepositories
@Repository
public interface UserRepo extends JpaRepository<User,Integer>{
    Optional<User> findOneByDocumentNumberAndDocumentTypeAndPassword(String documentNumber, String documentType, String password);
    User findByDocumentNumberAndDocumentType(String documentNumber, String documentType);
}
