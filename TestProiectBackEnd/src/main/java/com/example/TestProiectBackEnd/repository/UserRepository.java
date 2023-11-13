package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    User findFirstByIduser(Long id);

}
