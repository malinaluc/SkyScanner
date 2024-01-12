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
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idairport;
    private String name;
    private String city;
    //fk

    private Long countryId;

    @Id
    public Long getIdairport() {
        return idairport;
    }

    public void setIdairport(Long idairport) {
        this.idairport = idairport;
    }
}
