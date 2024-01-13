package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.exception.ResourceNotFoundException;
import com.example.TestProiectBackEnd.model.Flight;
import com.example.TestProiectBackEnd.repository.FlightRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/GetAllFlights")
    public List<Flight> getAllFlights() {
        return (List<Flight>) flightRepository.findAll();
    }

    @GetMapping("/GetData") //->ia date
    public String getMessage() // http://localhost:8080 ne afiseaza hai sa invatam spring
    {
        return "message";
    }
    /*@PostMapping("/Print")
    public void printMessage(@RequestBody ObiectNou data){
        System.out.println(data);
        data.getId();
    }*/

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


}
