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
public class Airport {
    private Long idairport;
    private String name;
    private String city;
    //fk

    private Long countryId;

    public void setIdairport(Long idairport) {
        this.idairport = idairport;
    }

    @Id
    public Long getIdairport() {
        return idairport;
    }
}
