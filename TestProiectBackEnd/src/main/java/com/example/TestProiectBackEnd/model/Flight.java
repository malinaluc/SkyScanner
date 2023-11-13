package com.example.TestProiectBackEnd.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
@ToString
public class Flight {

    //!!nu denumim campurile cu _
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idfligt;
    //fk
    private Long originAirportId;
    //fk
    private Long destinationAirportId;
    private Long price;
    private String airline;
    private Date departureDate;
    private Integer departureHour;
    private Date arrivalDate;
    private Integer arrivalHour;
    private String gate;
    private Integer duration; ///minutes
    //fk
    private Long airplaneId;






    @OneToOne
    private Seat seat;

}
