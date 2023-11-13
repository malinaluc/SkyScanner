package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Airplane;
import com.example.TestProiectBackEnd.repository.AirplaneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/airplane")
@CrossOrigin
public class AirplaneController {

    private AirplaneRepository airplaneRepository;

    @GetMapping("/GetAllAirplanes")
    public List<Airplane> getAllAirplanes()
    {
        return (List<Airplane>) airplaneRepository.findAll();
    }

    @PostMapping("/AddAirplane")
    public Airplane createAirplane(@RequestBody Airplane airplane)
    {
        return airplaneRepository.save(airplane);
    }




}
