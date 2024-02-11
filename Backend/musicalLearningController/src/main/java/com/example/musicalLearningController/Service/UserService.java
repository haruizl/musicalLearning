package com.example.musicalLearningController.Service;
import com.example.musicalLearningController.Dto.UserDTO;
import com.example.musicalLearningController.Dto.LoginDTO;
import com.example.musicalLearningController.response.LoginResponse;

public interface UserService {
    String addUser(UserDTO userDTO);

    LoginResponse loginUser(LoginDTO loginDTO);
}