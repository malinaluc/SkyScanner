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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idbooking;
    //fk
    private Long flightId;
    //fk
    private Long userId;
    //fk
    private Long seatId;

    public void setIdbooking(Long idbooking) {
        this.idbooking = idbooking;
    }

    @Id
    public Long getIdbooking() {
        return idbooking;
    }
}
