package com.example.TestProiectBackEnd.repository;

import com.example.TestProiectBackEnd.model.Seat;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepsoitory extends CrudRepository<Seat, Long>  { //tip + tip(pk)
    ///all CRUD database methods
  /// Object save(Seat seat) ;
}
