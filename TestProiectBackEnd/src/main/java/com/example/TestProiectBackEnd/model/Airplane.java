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
public class Airplane {
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
