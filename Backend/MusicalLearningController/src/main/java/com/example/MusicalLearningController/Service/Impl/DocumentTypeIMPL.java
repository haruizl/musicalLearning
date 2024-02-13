package com.example.musicalLearningController.Service.Impl;

import com.example.musicalLearningController.Entity.DocumentType;
import com.example.musicalLearningController.Repo.DocumentTypeRepo;
import com.example.musicalLearningController.Service.DocumentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DocumentTypeIMPL implements DocumentTypeService {
    @Autowired
    private DocumentTypeRepo documentTypeRepo;

    @Override
    public List<DocumentType> getDocumentTypes() {
        return documentTypeRepo.findAll();
    }
}
