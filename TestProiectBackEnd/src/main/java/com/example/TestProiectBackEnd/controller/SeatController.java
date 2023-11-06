package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Seat;
import com.example.TestProiectBackEnd.service.SeatServiceImplementation;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/seat")
@CrossOrigin
public class SeatController {

    private SeatServiceImplementation seatServiceImplementation;

    @GetMapping("/ReadData")
    public String getData(){
        return "am ajuns in SeatController";
    }

    @PostMapping("/Insert")
    public void insert(@RequestBody Seat seat)
    {
      seatServiceImplementation.Insert(seat);
    }
}
