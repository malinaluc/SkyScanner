package com.example.TestProiectBackEnd;

import com.example.TestProiectBackEnd.model.Flight;
import com.example.TestProiectBackEnd.model.Seat;
import com.example.TestProiectBackEnd.repository.FlightRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RequiredArgsConstructor
public class TestProiectBackEndApplication implements CommandLineRunner {

	///private final FlightRepository flightRepository;

	public static void main(String[] args) {

		SpringApplication.run(TestProiectBackEndApplication.class, args);

		///Seat seat = new Seat(1L); ///L ->face variabila de tip long
	}

	@Autowired
	private FlightRepository flightRepository;


	///@Override
	public void run(String... args) throws Exception {
		/*Flight flight = new Flight();
		flight.setIdfligt(1L); ///L ->face variabila de tip long
		flight.setAirline("Tarom");
		flightRepository.save(flight);

		Flight flight1 = new Flight();
		flight1.setIdfligt(2L); ///L ->face variabila de tip long
		flight1.setAirline("Wizz");
		flightRepository.save(flight1);*/

	}
}
