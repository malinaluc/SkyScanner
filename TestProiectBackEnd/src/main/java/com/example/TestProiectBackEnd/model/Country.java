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
public class Country {
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
