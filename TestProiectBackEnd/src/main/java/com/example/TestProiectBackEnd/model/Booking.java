package com.example.TestProiectBackEnd.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table

public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idbooking;
    //fk
    private Long flightId;
    //fk
    private Long userId;
    //fk
    private Long seatId;

    @Id
    public Long getIdbooking() {
        return idbooking;
    }

    public void setIdbooking(Long idbooking) {
        this.idbooking = idbooking;
    }
}
