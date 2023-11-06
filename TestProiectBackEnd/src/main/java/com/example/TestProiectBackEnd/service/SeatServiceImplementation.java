package com.example.TestProiectBackEnd.service;

import com.example.TestProiectBackEnd.model.Seat;
import com.example.TestProiectBackEnd.repository.SeatRepsoitory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SeatServiceImplementation implements SeatService{

    private final SeatRepsoitory seatRepsoitory;

    @Override
    public void Insert(Seat seat){
        seatRepsoitory.save(seat);
    }
}
