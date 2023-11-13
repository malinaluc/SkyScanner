package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Country;
import com.example.TestProiectBackEnd.repository.CountryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/country")
@CrossOrigin

public class CountryController {

    private CountryRepository countryRepository;

    @GetMapping("/GetAllCountries")
    public List<Country> getAllCountries()
    {
        return (List<Country>) countryRepository.findAll();
    }

    @PostMapping("/AddCountry")
    public Country createCountry(@RequestBody Country country)
    {
        return countryRepository.save(country);
    }
}
