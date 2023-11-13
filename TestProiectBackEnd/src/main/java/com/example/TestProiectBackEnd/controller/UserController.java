package com.example.TestProiectBackEnd.controller;


import com.example.TestProiectBackEnd.model.User;
import com.example.TestProiectBackEnd.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController//
@RequestMapping("/api/user")
@CrossOrigin

public class UserController {

    private UserRepository userRepository;

    @GetMapping("/GetAllUsers")
    public List<User> getAllUsers()
    {
        return (List<User>) userRepository.findAll();
    }

    @PostMapping("/AddUser")
    public User createUser(@RequestBody User user)
    {
        return userRepository.save(user);
    }

}
