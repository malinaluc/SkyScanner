import React, { useEffect, useState } from "react";
import axios from "axios";
import { airlineTextField, airplaneTextField, arrivalDateTextField, arrivalHourTextField, budgetTextField, containerStyle, createAccountButtonStyle, createFlightButtonStyle, createOnlyFlightButtonStyle, createUserButtonStyle, deleteUserFlightButtonStyle, departureDateTextField, departurelHourTextField, destinationAirportTextField, durationTextField, emailTextField, gateTextField, logOutButtonStyle, nameTextField, originAirportTextField, pageStyle, passwordTextField, pricenTextField, seeAllUsersButtonStyle, surnameTextField, updateUserFlightButtonStyle } from "./CreateForAdminPage.styles";

import newAccount from "../img/new-account.png";
import planeIcon from "../img/planeIcon.png";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { seeAllFlightsButtonStyle } from "./AllInfoAdmin.styles";
import DatePicker from 'react-datepicker';


export const CreateForAdminPage = (): JSX.Element => {

    const navigate = useNavigate();

    //user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [budget, setBudget] = useState('');

    //flight
    const [airline, setAirline] = useState('');
    const [arrivalHour, setArrivalHour] = useState('');
    const [departureHour, setDepartureHour] = useState('');
    const [duration, setDuration] = useState('');
    const [airplaneId, setAirplaneID] = useState('');
    const [destinationAirportId, setDestinationAirport] = useState<number>(-1);

    const [price, setPrice] = useState('');
    const [gate, setGate] = useState('');
    const [originAirportId, setOriginAirport] = useState<number>(-1);;
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');

    const [createUserContainer, setCreateUserContainer] = useState(false);

    const [createFlightContainer, setCreateFlightContainer] = useState(false);

    const numeOrase = ['Cluj-Napoca', 'Bucharest', 'Antalya', 'Istanbul', 'Bologna', 'Milan', 'Rome', 'Naples', 'Basel', 'Zurich', 'Barcelona', 'Madrid', 'Malaga', 'Valencia', 'Paris Beuvais', 'Lyon', 'Nice', 'Eindhoven', 'Amsterdam', 'London', 'Manchester', 'Zakynthos', 'Mykonos', 'Santorini'];

    const createFlight = (event: any): void => {
        setCreateUserContainer(false);
        setCreateFlightContainer(true);
    }

    const createUser = (event: any): void => {
        setCreateFlightContainer(false);
        setCreateUserContainer(true);
    }

    const updateUserFlight = (event: any): void => {
        navigate("/UpdateForAdminPage");
    }

    const deleteUserFlight = (event: any): void => {
        navigate("/DeleteForAdminPage");
    }
    const logOut = (event: any): void => {
        navigate("/Login")
    }

    const showUsers = (event: any): void => {
        navigate("/AllInfoAdmin");
    }
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event: any) => {
        setSelectedDate(event.target.value);
    };

    //user

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value);

    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value);

    }

    const onChangeName = (event: any): void => {
        setName(event.target.value);

    }

    const onChangeSurname = (event: any): void => {
        setSurname(event.target.value);

    }

    const onChangeBudget = (event: any): void => {
        setBudget(event.target.value);

    }

    //flight
    const onChangeAirline = (event: any): void => {
        setAirline(event.target.value);
    }

    const onChangeArrivalHour = (event: any): void => {
        setArrivalHour(event.target.value);
    }

    const onChangeDepartureHour = (event: any): void => {
        setDepartureHour(event.target.value);
    }

    const onChangeDuration = (event: any): void => {
        setDuration(event.target.value);
    }

    const onChangeAirplaneID = (event: any): void => {
        setAirplaneID(event.target.value);
        console.log(airplaneId);
    }

    const onChangeDestinationAirport = (event: any): void => {
        const selectedCity = event.target.value;
        const position = numeOrase.indexOf(selectedCity);
        setDestinationAirport(position+1);
        console.log(position + 1);
    }

    const onChangePrice = (event: any): void => {
        setPrice(event.target.value);
    }

    const onChangeGate = (event: any): void => {
        setGate(event.target.value);
    }

    const onChangeOriginAirport = (event: any): void => {
        const selectedCity = event.target.value;
        const position = numeOrase.indexOf(selectedCity);
        setOriginAirport(position + 1);
    }

    const onChangeDepartureDate = (event: any): void => {
        setDepartureDate(event.target.value);
    }

    const onChangeArrivalDate = (event: any): void => {
        setArrivalDate(event.target.value);
    }

    const createUserRequest = async (event: any): Promise<void> => {
        const sign = await axios.post("http://localhost:8080/api/user/AddUser", { budget, "role": 0, email, name, password, surname });
    }

    const createFlightRequest = async (event: any): Promise<void> => {
        const sign = await axios.post("http://localhost:8080/api/flight/AddFlight",
            {
                arrivalDate,
                arrivalHour,
                departureDate,
                departureHour,
                duration,
                airplaneId,
                destinationAirportId,
                originAirportId,
                price,
                airline,
                gate
            });
    }



    return (
        <div style={pageStyle}>
            <Button style={logOutButtonStyle} onClick={logOut} variant="outlined" > LogOut</Button>
            <div>
                <Typography variant="h6" style={{ fontWeight: 'bold', color: 'white', marginTop: '50px', marginLeft: "40%" }}>
                    Let's create a flight or an user
                </Typography>
                <Button style={createFlightButtonStyle} onClick={createFlight} variant="outlined">Create A Flight</Button>
                <Button style={createUserButtonStyle} onClick={createUser} variant="outlined" >Create An User</Button>
                <Button style={seeAllUsersButtonStyle} onClick={showUsers} variant="outlined">See All Users Or Flights</Button>
                <Button style={updateUserFlightButtonStyle} onClick={updateUserFlight} variant="outlined">Update User Or Flight</Button>
                <Button style={deleteUserFlightButtonStyle} onClick={deleteUserFlight} variant="outlined" >Delete User Or Flight</Button>
            </div>



            {createUserContainer && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <img src={newAccount} style={{ maxWidth: '30%', height: "auto", marginLeft: "20%" }} />


                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "10%" }}>
                        Let's create an account      !

                    </Typography>

                    <div style={containerStyle}>
                        <TextField id="emailTextField" label="Email" variant="outlined" size="medium" style={emailTextField} onChange={onChangeEmail}></TextField>
                        <TextField id="passTextField" label="Password" variant="outlined" size="medium" style={passwordTextField} onChange={onChangePassword}></TextField>
                        <TextField id="surnameTextField" label="Surname" variant="outlined" size="medium" style={surnameTextField} onChange={onChangeSurname}></TextField>
                        <TextField id="nameTextField" label="Name" variant="outlined" size="medium" style={nameTextField} onChange={onChangeName}></TextField>
                        <TextField id="budgetTextField" label="Budget" variant="outlined" size="medium" style={budgetTextField} onChange={onChangeBudget}></TextField>
                        <Button style={createAccountButtonStyle} onClick={createUserRequest} variant="outlined">Create User</Button>
                    </div>
                </div>
            )
            }

            {createFlightContainer && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <img src={planeIcon} style={{ maxWidth: '50%', height: "auto", marginLeft: "20%" }} />
                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center" }}>
                        Let's create a flight !
                    </Typography>
                    <TextField id="airlineTextField" label="Airline" variant="outlined" size="small" style={airlineTextField} onChange={onChangeAirline} ></TextField>
                    <TextField id="arrivalHourTextField" label="Arrival Hour" variant="outlined" size="small" style={arrivalHourTextField} onChange={onChangeArrivalHour}></TextField>
                    <TextField id="departureHourTextField" label="Departure Hour" variant="outlined" size="small" style={departurelHourTextField} onChange={onChangeDepartureHour}></TextField>
                    <TextField id="durationTextField" label="Duration - In Minutes" variant="outlined" size="small" style={durationTextField} onChange={onChangeDuration}></TextField>
                    <TextField id="airplaneIDTextField" label="Airplane ID " variant="outlined" size="small" style={airplaneTextField} onChange={onChangeAirplaneID}></TextField>
                    <TextField id="originAirport" label="Origin Airport - City" variant="outlined" size="small" style={originAirportTextField} onChange={onChangeOriginAirport}></TextField>
                    <TextField id="destinationAirport" label="Destination Airport - City" variant="outlined" size="small" style={destinationAirportTextField} onChange={onChangeDestinationAirport}></TextField>
                    <TextField id="priceTextField" label="Price" variant="outlined" size="small" style={pricenTextField} onChange={onChangePrice}></TextField>
                    <TextField id="gateTextField" label="Gate" variant="outlined" size="small" style={gateTextField} onChange={onChangeGate}></TextField>
                    <TextField id="departureDateTextField" label="Departure Date yyyy-mm-dd" variant="outlined" size="small" style={departureDateTextField} onChange={onChangeDepartureDate}></TextField>
                    <TextField id="arrivalDateTextField" label="Arrival Date yyyy-mm-dd" variant="outlined" size="small" style={arrivalDateTextField} onChange={onChangeArrivalDate}></TextField>

                    <Button style={createOnlyFlightButtonStyle} onClick={createFlightRequest} variant="outlined">Create Flight</Button>

                    <div style={containerStyle}>


                    </div>
                </div>
            )}

        </div>
    )

}