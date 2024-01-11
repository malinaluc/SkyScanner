package com.example.TestProiectBackEnd.controller;


import com.example.TestProiectBackEnd.model.User;
import com.example.TestProiectBackEnd.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin("http://localhost:3000")

public class UserController {

    @Autowired
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
