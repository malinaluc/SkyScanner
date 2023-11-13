package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.Airport;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AirportRepository extends CrudRepository<Airport,Long> {

    Airport findFirstByIdairport(Long id);
}
