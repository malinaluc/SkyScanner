package com.example.TestProiectBackEnd.controller;

import com.example.TestProiectBackEnd.model.Booking;
import com.example.TestProiectBackEnd.repository.BookingRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin

public class BookingController {

    private BookingRepository bookingRepository;

    @GetMapping("/GetAllBookings")
    public List<Booking> getAllBokings()
    {
        return (List<Booking>) bookingRepository.findAll();
    }

    @PostMapping("/AddBooking")
    public Booking createBooking(@RequestBody Booking booking)
    {
        return bookingRepository.save(booking);
    }
}
