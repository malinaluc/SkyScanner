package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.VTO.ObiectNou;
import com.example.TestProiectBackEnd.model.Flight;
import com.example.TestProiectBackEnd.model.Seat;
import com.example.TestProiectBackEnd.repository.FlightRepository;
import com.example.TestProiectBackEnd.service.SeatServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/flight")
@CrossOrigin // poate sa primeasca request uri de la orice aplicatie
///@CrossOrigin(allow = ....) ///doar de la aplicatia asta poate primi request
public class FlightController {

    @Autowired
    private FlightRepository flightRepository;

    @GetMapping
    public List<Flight> getAllFlights(){
      ///  return flightRepository.findAll();
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
    public Flight createFlight(@RequestBody Flight flight)
    {
        return flightRepository.save(flight);
    }


}
