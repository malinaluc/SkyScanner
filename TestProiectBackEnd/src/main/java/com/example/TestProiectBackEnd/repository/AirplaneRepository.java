package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.Airplane;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirplaneRepository extends CrudRepository<Airplane,Long> {

    Airplane findFirstByIdairplane(Long id);


}
