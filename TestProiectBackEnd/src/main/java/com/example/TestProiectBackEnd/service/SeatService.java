package com.example.TestProiectBackEnd.service;

import com.example.TestProiectBackEnd.model.Seat;
import org.springframework.stereotype.Component;

@Component
public interface SeatService{

    void Insert(Seat seat) ;
}
