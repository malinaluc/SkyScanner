import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { loginButtonStyle, pageStyle, parentDivStyle, skyScannerTextFieldStyle, signUpButtonStyle } from "./Login.styles";
import { createUserFlightButtonStyle, deleteUserFlightButtonStyle, logOutButtonStyle, seeAllFlightsButtonStyle, seeAllUsersButtonStyle, showFlightsContainerStyle, showUsersContainerStyle, updateUserFlightButtonStyle } from "./AllInfoAdmin.styles";
import { useNavigate } from "react-router-dom";

type User = {
    email: string;
    password: string;
    name: string;
    surname: string;
    budget: number;
  };

  
type Flight = {
    idflight :number;
    airline : string;
    duration : number;
    price : number;
    departureDate : Date;
    departureHour : number;
    arrivalDate : Date;
    arrivalHour : number;
    originAirportId : number;
    destinationAirportId : number;
};

export const AllInfoAdmin = (): JSX.Element => {
    const navigate = useNavigate();

    const [users, setUsers] = useState<User[]>([]);

    const [flights, setFlights] = useState<Flight[]>([]);

    const [showUsersContainer, setShowUsersContainer] = useState(false);

    const [showFlightsContainer, setShowFlightsContainer] = useState(false);

    const numeOrase =['Cluj-Napoca','Bucharest','Antalya','Istanbul','Bologna','Milan','Rome','Naples','Basel','Zurich','Barcelona','Madrid','Malaga','Valencia','Paris Beuvais','Lyon','Nice','Eindhoven','Amsterdam','London','Manchester','Zakynthos','Mykonos','Santorini'];

    useEffect(() => {
        loadUsers();
        loadFlights();
    },[]); //[] -> ca sa ruleze o singura data

    const loadUsers =async () =>{
        try{
        const resultUsers = await axios.get("http://localhost:8080/api/user/GetAllUsers")
        console.log(resultUsers.data);
        setUsers(resultUsers.data);
        } catch(error){
            console.error("Error loading users: ", error);
        }
    };

    const loadFlights = async () =>{
        try {
        const resultFlights = await axios.get('http://localhost:8080/api/flight/GetAllFlights')
        console.log(resultFlights.data);
        setFlights(resultFlights.data);
        } catch (error) {
            console.error("Error loading flights: ", error)
        }
    };

    const showUsers = (event : any) : void => {
        setShowFlightsContainer(false);
        setShowUsersContainer(true); 
    }

    const showFlights = (event : any) :void => {
        setShowUsersContainer(false);
        setShowFlightsContainer(true);
    }

    const createUserFlight = (event : any) : void =>{
        navigate("/CreateForAdminPage");
    }

    const updateUserFlight = (event : any) : void => {
      navigate("/UpdateForAdminPage");
    }

    const deleteUserFlight = (event : any) : void => {
      navigate("/DeleteForAdminPage");
    }
    const logOut = (event : any) : void => {
      navigate("/Login")
   }

    const typographyStyleUser: React.CSSProperties = {
        color: 'white',
        marginTop: showUsersContainer ? '70px' : '0', 
    };

    const typographyStyleFlight : React.CSSProperties = {
        color : 'white',
        marginTop : showFlightsContainer ? '70px' : '0',
    };

    return(
        <div style = {pageStyle}>
           <Button style = {logOutButtonStyle} onClick = {logOut} variant = "outlined" > LogOut</Button>
        <div>
        <Typography variant="h6" style={{position : "relative", margin : "auto", textAlign: 'center', top: "-50%", fontWeight: 'bold',color :'white' }}>
            Select an action, admin! This page is for viewing data.
            

            
        </Typography>
        <Button style = {seeAllFlightsButtonStyle} onClick ={showFlights} variant = "outlined" >See All Flights</Button>
        <Button style = {seeAllUsersButtonStyle} onClick ={showUsers} variant = "outlined">See All Users</Button>
        <Button style = {createUserFlightButtonStyle} onClick = {createUserFlight} variant = "outlined">Create User Or Flight</Button>
        <Button style = {updateUserFlightButtonStyle} onClick ={updateUserFlight} variant = "outlined">Update User Or Flight</Button>
        <Button style = {deleteUserFlightButtonStyle} onClick={deleteUserFlight} variant = "outlined" >Delete User Or Flight</Button>
        </div>

        {showUsersContainer && (
        <div>
          <Typography variant="h6" style={typographyStyleUser}>All Users:</Typography>
          <Table style ={showUsersContainerStyle}>
            <TableHead>
              <TableRow>
              <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Surname</TableCell>
                <TableCell>Budget</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.budget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

    { showFlightsContainer && (
        <div>
         <Typography variant="h6" style={typographyStyleFlight}>All Flights:</Typography>
         <Table style ={showFlightsContainerStyle}>
            <TableHead>
              <TableRow>
                <TableCell>Airline</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Origin Airport</TableCell>
                <TableCell>Destination Airport</TableCell>
                <TableCell>Price</TableCell> 
                <TableCell>Departure Hour</TableCell>
                <TableCell>Arrival Hour</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {flights.map((flight) => (
                <TableRow key={flight.idflight}>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.duration}Minutes</TableCell>
                  <TableCell>{numeOrase[flight.originAirportId]}</TableCell>
                  <TableCell>{numeOrase[flight.destinationAirportId]}</TableCell>
                  <TableCell>{flight.price}Ron</TableCell>
                  <TableCell>{flight.departureHour}PM</TableCell>
                  <TableCell>{flight.arrivalHour}PM</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

        </div>   
    )
    }
    </div>
    );
}