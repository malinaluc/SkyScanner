package com.example.TestProiectBackEnd.service;

import com.example.TestProiectBackEnd.model.Flight;
import org.springframework.stereotype.Component;

@Component
public interface FlightService {


     Flight findFirstById(Long id);
}
