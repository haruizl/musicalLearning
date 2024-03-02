package com.example.musicalLearningController.Service.Impl;
import com.example.musicalLearningController.Dto.UserDTO;
import com.example.musicalLearningController.Dto.LoginDTO;
import com.example.musicalLearningController.Entity.User;
import com.example.musicalLearningController.Repo.UserRepo;
import com.example.musicalLearningController.Service.UserService;
import com.example.musicalLearningController.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserIMPL implements UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public LoginResponse addUser(UserDTO userDTO) {
        User user = new User(
            userDTO.getUserid(),
            userDTO.getName(),
            userDTO.getLastname(),
            userDTO.getEmail(),
            this.passwordEncoder.encode(userDTO.getPassword())
        );

        userRepo.save(user);
        return new LoginResponse("Successful Registration", true);
    }

    @Override
    public LoginResponse loginUser(LoginDTO loginDTO) {
        String msg = "";
        User user1 = userRepo.findByEmail(loginDTO.getEmail());
        if (user1 != null) {
            String password = loginDTO.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo
                        .findOneByEmailAndPassword(loginDTO.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true);
                } else {
                    return new LoginResponse("Login Failed", false);
                }
            } else {

                return new LoginResponse("password Not Match", false);
            }
        }else {
            return new LoginResponse("Document type and document number relation doesn't exit", false);
        }
    }


}
