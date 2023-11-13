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
public class Airplane {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idairplane;
    private String type;
    private Integer businessCapacity;
    private Integer businessSold;
    private Integer economyCapacity;
    private Integer economySold;

    public void setIdairplane(Long idairplane) {
        this.idairplane = idairplane;
    }

    @Id
    public Long getIdairplane() {
        return idairplane;
    }
}
