package com.example.TestProiectBackEnd.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
