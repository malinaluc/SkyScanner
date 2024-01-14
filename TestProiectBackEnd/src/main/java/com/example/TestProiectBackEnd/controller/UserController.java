package com.example.TestProiectBackEnd.controller;


import com.example.TestProiectBackEnd.exception.ResourceNotFoundException;
import com.example.TestProiectBackEnd.model.User;
import com.example.TestProiectBackEnd.repository.UserRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@CrossOrigin

public class UserController {

    @Autowired
    private UserRepository userRepository;
    @PersistenceContext
    private EntityManager entityManager;

    public boolean findByEmailAndPassword(String email, String password) {
        Query query = entityManager.createQuery(
                "SELECT u FROM User u WHERE u.email = :email AND u.password = :password AND u.role = 1",
                User.class
        );

        query.setParameter("email", email);
        query.setParameter("password", password);

        List<User> result = query.getResultList();
        if (result.size() != 0) return true;
        return false;

    }

    public boolean findByEmailAndPasswordAdmin(String email, String password) {
        Query query = entityManager.createQuery(
                "SELECT u FROM User u WHERE u.email = :email AND u.password = :password AND u.role = 0 ",
                User.class
        );

        query.setParameter("email", email);
        query.setParameter("password", password);

        List<User> result = query.getResultList();
        if (result.size() != 0) return true;
        return false;

    }

    @GetMapping("/GetAllUsers")
    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/login/{email}/{password}")
    public boolean isAuthenticated(@PathVariable String email, @PathVariable String password) {
        return findByEmailAndPassword(email, password);
    }

    @GetMapping("/loginAdmin/{email}/{password}")
    public boolean isAuthenticatedAdmin(@PathVariable String email, @PathVariable String password) {
        return findByEmailAndPasswordAdmin(email, password);
    }

    @PostMapping("/AddUser")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    ///Response entity -> create the result
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails) {
        User updateUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("USer not exist with id: " + id));
        updateUser.setEmail(userDetails.getEmail());
        updateUser.setName(userDetails.getName());
        updateUser.setPassword(userDetails.getPassword());
        updateUser.setBudget(userDetails.getBudget());
        updateUser.setSurname(userDetails.getSurname());
        updateUser.setRole(userDetails.getRole());

        userRepository.save(updateUser);

        return ResponseEntity.ok(updateUser);

    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<HttpStatus> deleteEmployee(@PathVariable Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        userRepository.delete(user);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
