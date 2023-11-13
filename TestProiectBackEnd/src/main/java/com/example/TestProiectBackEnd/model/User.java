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

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
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
