import React, { useEffect, useState } from "react";
import axios from "axios";
import { FlightIDToDeleteTextField, IDToDeleteTextField, createUserFlightButtonStyle, deleteFlightButtonStyle, deleteTheFlightButtonStyle, deleteTheUserButtonStyle, deleteUserButtonStyle, logOutButtonStyle, pageStyle, seeAllUsersFlightsButtonStyle, showFlightsContainerStyle, showUsersContainerStyle, updateUserFlightButtonStyle } from "./DeleteForAdminPage.styles";
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { seeAllUsersButtonStyle } from "./AllInfoAdmin.styles";
type User = {
    iduser: number,
    email: string;
    password: string;
    name: string;
    surname: string;
    budget: number;
};


type Flight = {
    idfligt: number;
    airline: string;
    duration: number;
    price: number;
    departureDate: Date;
    departureHour: number;
    arrivalDate: Date;
    arrivalHour: number;
    originAirportId: number;
    destinationAirportId: number;
};


export const DeleteForAdminPage = (): JSX.Element => {
    const navigate = useNavigate();

    const [users, setUsers] = useState<User[]>([]);

    const [flights, setFlights] = useState<Flight[]>([]);

    const [iduser, setIDUser] = useState<number>(0);

    const onChangeIDUser = (event: any): void => {
        setIDUser(event.target.value);
    }

    const [idfligt, setIDflight] = useState<number>(0);

    const onChangeIDFlight = (event: any): void => {
        setIDflight(event.target.value);
    }


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


    const logOut = (event: any): void => {
        navigate("/Login")
    }

    const deleteUser = async (event: any): Promise<void> => {
       const del = await axios.delete(`http://localhost:8080/api/user/deleteUser/${iduser}`);
    }
    const deleteFlight = async (event: any): Promise<void> => {
        const del = await axios.delete(`http://localhost:8080/api/flight/deleteFlight/${idfligt}`);
    }

    const show = (event: any): void => {
        navigate("/AllInfoAdmin");
    }
    const create = (event: any): void => {
        navigate("/CreateForAdminPage");
    }

    const update = (event: any): void => {
        navigate("/UpdateForAdminPage");
    }

    const typographyStyleUser: React.CSSProperties = {
        color: 'white',
        marginTop: showUsersContainer ? '70px' : '0', 
    };

    const typographyStyleFlight : React.CSSProperties = {
        color : 'white',
        marginTop : showFlightsContainer ? '70px' : '0',
    };


    return (
        <div style={pageStyle}>
            <Button style={logOutButtonStyle} onClick={logOut} variant="outlined" > LogOut</Button>
            <div>
                <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "30%" }}>
                    What do you want to delete ?

                </Typography>

                <Button style={deleteUserButtonStyle} onClick={showUsers} variant="outlined">Delete An User</Button>
                <Button style={deleteFlightButtonStyle} onClick={showFlights} variant="outlined">Delete A Flight</Button>
                <Button style={seeAllUsersFlightsButtonStyle} onClick={show} variant="outlined" >See All Users Or Flights</Button>
                <Button style={createUserFlightButtonStyle} onClick={create} variant="outlined">Create Flight Or User</Button>
                <Button style={updateUserFlightButtonStyle} onClick={update} variant="outlined" >Update User Or Flight</Button>

            </div>

            {showUsersContainer && (
        <div>
          <Typography variant="h6" style={typographyStyleUser}>All Users:</Typography>
          <Table style ={showUsersContainerStyle}>
            <TableHead>
              <TableRow>
              <TableCell>ID</TableCell>
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
                 <TableCell>{user.iduser}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.surname}</TableCell>
                  <TableCell>{user.budget}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "40%" }}>
                    Which user ?

        </Typography>
        <TextField id = "idTextField" label = "User ID" variant = "outlined" size = "small" style = {IDToDeleteTextField} onChange = {onChangeIDUser}></TextField>
        <Button style ={deleteTheUserButtonStyle} onClick ={deleteUser} variant = "outlined">Delete the user</Button>

        </div>
      )}

      { showFlightsContainer && (
        <div>
         <Typography variant="h6" style={typographyStyleFlight}>All Flights:</Typography>
         <Table style ={showFlightsContainerStyle}>
            <TableHead>
              <TableRow>
              <TableCell>ID</TableCell>
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
                <TableRow key={flight.idfligt}>
                  <TableCell>{flight.idfligt}</TableCell>
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

          <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "40%" }}>
                    Which flight ?

        </Typography>
        <TextField id = "FlightidTextField" label = "Flight ID" variant = "outlined" size = "small" style = {FlightIDToDeleteTextField} onChange = {onChangeIDFlight}></TextField>
        <Button style ={deleteTheFlightButtonStyle} onClick ={deleteFlight} variant = "outlined">Delete the flight</Button>

        </div>   
    )
    }

        </div>
    )
}