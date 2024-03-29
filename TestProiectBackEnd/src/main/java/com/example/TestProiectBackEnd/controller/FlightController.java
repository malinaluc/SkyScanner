package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.exception.ResourceNotFoundException;
import com.example.TestProiectBackEnd.model.Flight;
import com.example.TestProiectBackEnd.repository.FlightRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight")
@CrossOrigin // poate sa primeasca request uri de la orice aplicatie
///@CrossOrigin(allow = ....) ///doar de la aplicatia asta poate primi request
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;
    @PersistenceContext
    private EntityManager entityManager;

    @GetMapping("/GetAllFlights")
    public List<Flight> getAllFlights() {
        return (List<Flight>) flightRepository.findAll();
    }

    @GetMapping("/GetData") //->ia date
    public String getMessage() // http://localhost:8080 ne afiseaza hai sa invatam spring
    {
        return "message";
    }

    //build create flight REST API
    @PostMapping("/AddFlight")
    public Flight createFlight(@RequestBody Flight flight) {

        return flightRepository.save(flight);
    }

    @PutMapping("/updateFlight/{id}")
    public ResponseEntity<Flight> updateFlight(@PathVariable Long id, @RequestBody Flight flightDetails) {
        Flight updateFlight = flightRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Flight not exist with id" + id));

        updateFlight.setAirline(flightDetails.getAirline());
        updateFlight.setArrivalDate(flightDetails.getArrivalDate());
        updateFlight.setArrivalHour(flightDetails.getArrivalHour());
        updateFlight.setDepartureDate(flightDetails.getDepartureDate());
        updateFlight.setDepartureHour(flightDetails.getDepartureHour());
        updateFlight.setAirplaneId(flightDetails.getAirplaneId());
        updateFlight.setDestinationAirportId(flightDetails.getDestinationAirportId());
        updateFlight.setOriginAirportId(flightDetails.getOriginAirportId());
        updateFlight.setPrice(flightDetails.getPrice());
        updateFlight.setAirline(flightDetails.getAirline());
        updateFlight.setGate(flightDetails.getGate());

        flightRepository.save(updateFlight);

        return ResponseEntity.ok(updateFlight);
    }

    @DeleteMapping("/deleteFlight/{id}")
    public ResponseEntity<HttpStatus> deleteFlight(@PathVariable Long id) {
        Flight flight = flightRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Flight not exist with id: " + id));
        flightRepository.delete(flight);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/GetAllOriginAirports")
    public List<Integer> findOriginAirports() {
        Query query = entityManager.createQuery(
                "SELECT f.originAirportId FROM Flight f",
                Flight.class
        );

        List<Integer> result = query.getResultList();
        return result;
    }

}
