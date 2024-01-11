import React, { useEffect, useState } from "react";
import axios from "axios";

import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { loginButtonStyle, pageStyle, parentDivStyle, skyScannerTextFieldStyle, signUpButtonStyle } from "./Login.styles";
import { seeAllFlightsButtonStyle, seeAllUsersButtonStyle } from "./AllInfoAdmin.styles";







export const AllInfoAdmin = (): JSX.Element => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]); //[] -> ca sa ruleze o singura data

    const loadUsers =async () =>{
        const resultUsers = await axios.get("http://localhost:8080/api/user/GetAllUsers")
        console.log(resultUsers.data);
    }
 


    function createData(email: string, password: string, name: string, surname: string, budget: number){
        return {email, password, name, surname, budget};
    }
    
   
    

    const [showUsersContainer, setShowUsersContainer] = useState(true);

    const[showFlightsContainer, setShowFlightsContainer] = useState(true);

    const showUsers = (event : any) : void => {
        setShowFlightsContainer(false);
        setShowUsersContainer(true); 
    }

    const showFlights = (event : any) :void => {
        setShowUsersContainer(false);
        setShowFlightsContainer(true);
    }

    return(
        <div style = {pageStyle}>

        <div>
        <Typography variant="h6" style={{position : "relative", margin : "auto", textAlign: 'center', top: "-50%", fontWeight: 'bold',color :'white' }}>
            Select an action, admin
        </Typography>

        <Button style = {seeAllFlightsButtonStyle} onClick ={showFlights} variant = "outlined" >See All Flights</Button>
        <Button style = {seeAllUsersButtonStyle} onClick ={showUsers} variant = "outlined">See All Users</Button>
        </div>

        


        </div>

    );

}