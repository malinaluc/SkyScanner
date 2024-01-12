import React, { useEffect, useState } from "react";
import axios from "axios";
import { budgetTextField, containerStyle, createAccountButtonStyle, createUserButtonStyle, deleteUserFlightButtonStyle, emailTextField, logOutButtonStyle, nameTextField, pageStyle, passwordTextField,  seeAllUsersButtonStyle,  surnameTextField, updateUserFlightButtonStyle } from "./CreateForAdminPage.styles";

import newAccount from "../img/new-account.png";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { seeAllFlightsButtonStyle } from "./AllInfoAdmin.styles";


export const CreateForAdminPage = () : JSX.Element => {
    
    const navigate = useNavigate();

    const [createUserContainer, setCreateUserContainer] = useState(false);

    const [createFlightContainer, setCreateFlightContainer] = useState(false);


    const createFlight = (event : any) : void =>{
        setCreateUserContainer(false);
        setCreateFlightContainer(true);
    }

    const createUser = (event : any) : void =>{
        setCreateFlightContainer(false);
        setCreateUserContainer(true);
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

     const showUsers = (event : any) : void => {
        navigate("/AllInfoAdmin"); 
    }


    return (
    <div style ={pageStyle}>
        <Button style = {logOutButtonStyle} onClick = {logOut} variant = "outlined" > LogOut</Button>
        <div>
        <Typography variant="h6" style={{position : "relative", margin : "auto", textAlign: 'center', top: "-50%", fontWeight: 'bold',color :'white' }}>
            Let's create a flight or an user



        </Typography>
        
        <Button style = {createUserButtonStyle} onClick = {createUser} variant = "outlined" >Create An User</Button>
        <Button style = {seeAllUsersButtonStyle} onClick ={showUsers} variant = "outlined">See All Users Or Flights</Button>
        <Button style = {updateUserFlightButtonStyle} onClick ={updateUserFlight} variant = "outlined">Update User Or Flight</Button>
        <Button style = {deleteUserFlightButtonStyle} onClick={deleteUserFlight} variant = "outlined" >Delete User Or Flight</Button>
    </div>


    {createUserContainer && (
    <div>
    <img src={newAccount } style={{ maxWidth: '5%',height :"auto", left : "20%" }}/>
    

    <Typography variant="h5" style={{ color: 'white' , fontWeight: 'bold' , alignItems : "center"}}>
        Let's create an account ! 
    </Typography>

    <div style = {containerStyle}>
    <TextField id = "emailTextField" label = "Email" variant="outlined" size="medium" style={emailTextField}></TextField>
    <TextField id = "passTextField" label = "Password" variant = "outlined" size = "medium" style={passwordTextField}></TextField>
    <TextField id = "surnameTextField" label = "Surname" variant = "outlined" size = "medium" style={surnameTextField}></TextField>
    <TextField id = "nameTextField" label = "Name" variant = "outlined" size = "medium" style={nameTextField}></TextField>
    <TextField id = "budgetTextField" label = "Budget" variant = "outlined" size = "medium" style={budgetTextField}></TextField>
    <Button style = {createAccountButtonStyle} onClick = {createUser} variant = "outlined">Create User</Button>
    </div>
    </div>
    )

    }    

    
    </div>
    )

}