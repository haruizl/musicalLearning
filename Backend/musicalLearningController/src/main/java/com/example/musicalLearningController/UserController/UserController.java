package com.example.musicalLearningController.UserController;

import com.example.musicalLearningController.Dto.UserDTO;
import com.example.musicalLearningController.Dto.LoginDTO;
import com.example.musicalLearningController.Service.UserService;
import com.example.musicalLearningController.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public String saveUser(@RequestBody UserDTO UserDTO)
    {
        return userService.addUser(UserDTO);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = userService.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
}
