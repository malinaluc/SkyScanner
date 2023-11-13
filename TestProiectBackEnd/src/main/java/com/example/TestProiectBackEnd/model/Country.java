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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idcountry;
    private String name;

    public void setIdcountry(Long idcountry) {
        this.idcountry = idcountry;
    }

    @Id
    public Long getIdcountry() {
        return idcountry;
    }
}
