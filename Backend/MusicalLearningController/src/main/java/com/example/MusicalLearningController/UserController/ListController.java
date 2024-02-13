package com.example.musicalLearningController.UserController;

import com.example.musicalLearningController.Dto.UserDTO;
import com.example.musicalLearningController.Entity.DocumentType;
import com.example.musicalLearningController.Service.DocumentTypeService;
import com.example.musicalLearningController.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("listApi/v1")
public class ListController {

    @Autowired
    private DocumentTypeService documentTypeService;

    @GetMapping(path = "/documentTypes")
    public List<DocumentType> getDocumentTypes()
    {
        return documentTypeService.getDocumentTypes();
    }
}
