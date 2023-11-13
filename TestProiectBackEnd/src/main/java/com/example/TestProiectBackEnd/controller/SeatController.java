package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Seat;
import com.example.TestProiectBackEnd.repository.SeatRepsoitory;
import com.example.TestProiectBackEnd.service.SeatServiceImplementation;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seat")
@CrossOrigin
public class SeatController {

    private SeatServiceImplementation seatServiceImplementation;
    private SeatRepsoitory seatRepsoitory;

    @GetMapping("/GetAllSeats")
    public List<Seat> getAllSeats()
    {
        return (List<Seat>) seatRepsoitory.findAll();
    }

    @PostMapping("/AddSeat")
    public Seat createSeat(@RequestBody Seat seat)
    {
        return  seatRepsoitory.save(seat);
    }


}
