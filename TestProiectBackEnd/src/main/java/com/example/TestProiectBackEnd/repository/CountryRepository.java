package com.example.TestProiectBackEnd.repository;


import com.example.TestProiectBackEnd.model.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.awt.print.Book;

@Repository
public interface CountryRepository extends CrudRepository<Country,Long> {

    Country findFirstByIdcountry (Long id);
}
