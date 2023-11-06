package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.Flight;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FlightRepository extends CrudRepository<Flight,Long> {

    Flight findFirstByIdfligt(Long id);
    List<Flight> findAllByAirline(String airline);
}
