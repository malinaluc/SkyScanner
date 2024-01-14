import React, { useEffect, useState } from "react";
import axios from "axios";
import { IDTextField, IdTextField, airlineTextField, airplaneTextField, arrivalDateTextField, arrivalHourTextField, budgetTextField, createUserFlightButtonStyle, deleteUserFlightButtonStyle, departureDateTextField, departurelHourTextField, destinationAirportTextField, durationTextField, emailTextField, gateTextField, logOutButtonStyle, nameTextField, originAirportTextField, pageStyle, passwordTextField, pricenTextField, seeAllUsersButtonStyle, surnameTextField, updateAFlightButtonStyle, updateAccountButtonStyle, updateFlightButtonStyle, updateUserButtonStyle } from "./UpdateForAdminPage.styles";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";

import newAccount from "../img/new-account.png";
import planeIcon from "../img/planeIcon.png";
import { containerStyle } from "./SignUp.styles";


export const UpdateForAdminPage = (): JSX.Element => {
    const navigate = useNavigate();

    //user
    const [iduser, setIDUser] = useState<number>(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [budget, setBudget] = useState('');

    //flight
    let seat_idseat = 0;
    const [idfligt, setIDflight] = useState<number>(0);
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

    const [updateUserContainer, setUpdateUserContainer] = useState(false);
    const [updateFlightContainer, setUpdateFlightContainer] = useState(false);

    const numeOrase = ['Cluj-Napoca', 'Bucharest', 'Antalya', 'Istanbul', 'Bologna', 'Milan', 'Rome', 'Naples', 'Basel', 'Zurich', 'Barcelona', 'Madrid', 'Malaga', 'Valencia', 'Paris Beuvais', 'Lyon', 'Nice', 'Eindhoven', 'Amsterdam', 'London', 'Manchester', 'Zakynthos', 'Mykonos', 'Santorini'];

    const updateFlight = (event: any): void => {
        setUpdateUserContainer(false);
        setUpdateFlightContainer(true);
    }

    const updateUser = (event: any): void => {
        setUpdateFlightContainer(false);
        setUpdateUserContainer(true);
    }

    const createUserFlight = (event: any): void => {
        navigate("/CreateForAdminPage");
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
    //user

    const onChangeID = (event: any): void => {
        setIDUser(event.target.value);
    }

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
    const onChangeIDFlight = (event: any): void => {
        setIDflight(event.target.value);
        console.log(idfligt);
    }
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
        setDestinationAirport(position + 1);
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

    
    const updateUserRequest = async (event: any): Promise<void> => {

        ///!! Pentru ca avem nevoie ca iduser sa fie Long si nu String folosim  backticks ``
        const update = await axios.put(`http://localhost:8080/api/user/updateUser/${iduser}`,
            {
                budget,
                "role": 1,
                email,
                name,
                password,
                surname
            });
    }

    const updateFlightRequest = async (event: any): Promise<void> => {
        const update = await axios.put(`http://localhost:8080/api/flight/updateFlight/${idfligt}`,
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

                    Let's update a flight or an user
                </Typography>
                <Button style={updateUserButtonStyle} onClick={updateUser} variant="outlined">Update An User</Button>
                <Button style={updateAFlightButtonStyle} onClick={updateFlight} variant="outlined">Update A Flight</Button>
                <Button style={createUserFlightButtonStyle} onClick={createUserFlight} variant="outlined">Create Flight Or User</Button>
                <Button style={seeAllUsersButtonStyle} onClick={showUsers} variant="outlined">See All Users Or Flights</Button>
                <Button style={deleteUserFlightButtonStyle} onClick={deleteUserFlight} variant="outlined" >Delete User Or Flight</Button>

            </div>

            {updateUserContainer && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <img src={newAccount} style={{ maxWidth: '30%', height: "auto", marginLeft: "20%" }} />


                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "0%" }}>
                        Let's update the user !
                    </Typography>

                    <div style={containerStyle}>
                        <TextField id="emailTextField" label="Email" variant="outlined" size="medium" style={emailTextField} onChange={onChangeEmail}></TextField>
                        <TextField id="passTextField" label="Password" variant="outlined" size="medium" style={passwordTextField} onChange={onChangePassword}></TextField>
                        <TextField id="surnameTextField" label="Surname" variant="outlined" size="medium" style={surnameTextField} onChange={onChangeSurname}></TextField>
                        <TextField id="nameTextField" label="Name" variant="outlined" size="medium" style={nameTextField} onChange={onChangeName}></TextField>
                        <TextField id="budgetTextField" label="Budget" variant="outlined" size="medium" style={budgetTextField} onChange={onChangeBudget}></TextField>
                        <TextField id="idTextField" label="ID" variant="outlined" size="medium" style={IdTextField} onChange={onChangeID}></TextField>
                        <Button style={updateAccountButtonStyle} onClick={updateUserRequest} variant="outlined">Update User</Button>
                    </div>
                </div>
            )
            }

            {updateFlightContainer && (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <img src={planeIcon} style={{ maxWidth: '50%', height: "auto", marginLeft: "20%" }} />
                    <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center" }}>
                        Let's update a flight !
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
                    <TextField id = "idTextField" label = "ID" variant = "outlined" size = "small" style = {IDTextField} onChange = {onChangeIDFlight}></TextField>
                    <Button style={updateFlightButtonStyle} onClick={updateFlightRequest} variant="outlined">Update Flight</Button>

                    <div style={containerStyle}>


                    </div>
                </div>
            )}

        </div>
    )
}