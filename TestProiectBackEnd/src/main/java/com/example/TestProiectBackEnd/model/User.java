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

public class User {
    private Long iduser;
    private String name;
    private String surname;
    private String email;
    private String password;
    private Integer budget;
    private Integer role; /// ->manager, client

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    @Id
    public Long getIduser() {
        return iduser;
    }
}
