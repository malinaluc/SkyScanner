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

public class Seat {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idseat;
    ///fk
    private Long flightId;
    //fk
    private Long userId;
    private String code; /// -> 1A, 2B, 3C
    private Boolean business;
    private Boolean disponibility;
    //fk
    private Long airplaneId;


}
