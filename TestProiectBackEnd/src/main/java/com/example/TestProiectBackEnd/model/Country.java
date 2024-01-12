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
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idcountry;
    private String name;

    @Id
    public Long getIdcountry() {
        return idcountry;
    }

    public void setIdcountry(Long idcountry) {
        this.idcountry = idcountry;
    }
}
