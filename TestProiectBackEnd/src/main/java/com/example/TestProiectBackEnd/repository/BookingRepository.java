package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.Booking;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends CrudRepository<Booking,Long> {

    Booking findFirsByIdbooking(Long id);
}
