package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findFirstByIduser(Long id);

}
