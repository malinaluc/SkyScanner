package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Airplane;
import com.example.TestProiectBackEnd.model.Airport;
import com.example.TestProiectBackEnd.repository.AirportRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airport")
@CrossOrigin

public class AirportController {

    private AirportRepository airportRepository;

    @GetMapping("/GetAllAirports")
    public List<Airport> getAllAirports(){
        return (List<Airport>) airportRepository.findAll();
    }

    @PostMapping ("/AddAirport")
    public Airport createAirport(@RequestBody Airport airport)
    {
        return airportRepository.save(airport);
    }


}
