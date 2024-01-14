import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import { emailTextField, pageStyle, containerStyle, passwordTextField, surnameTextField, nameTextField, budgetTextField, signUpButtonStyle, logOutButtonStyle } from "./SignUp.styles";
import { Button, TextField, Typography } from "@mui/material";

import newAccount from "../img/new-account.png";


export const SignUp = (): JSX.Element => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [budget, setBudget] = useState('');


    const signUp = async (event: any): Promise<void> => {
      const sign = await axios.post("http://localhost:8080/api/user/AddUser",{budget,"role":0,email,name,password,surname}); 
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

    const logOut = (event : any) : void => {
        navigate("/Login")
     }
    

    return <div style={pageStyle}>
        <Button style = {logOutButtonStyle} onClick = {logOut} variant = "outlined" > Back To Login</Button>
        <img src={newAccount} style={{ maxWidth: '5%', height: "auto", left: "20%" }} />


        <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center" }}>
            Let's create an account !
        </Typography>

        <div style={containerStyle}>
            <TextField id="emailTextField" label="Email" variant="outlined" size="medium" style={emailTextField} onChange={onChangeEmail}/>
            <TextField id="passTextField" label="Password" variant="outlined" size="medium" style={passwordTextField} onChange = {onChangePassword}></TextField>
            <TextField id="surnameTextField" label="Surname" variant="outlined" size="medium" style={surnameTextField} onChange={onChangeSurname}></TextField>
            <TextField id="nameTextField" label="Name" variant="outlined" size="medium" style={nameTextField} onChange={onChangeName}></TextField>
            <TextField id="budgetTextField" label="Budget" variant="outlined" size="medium" style={budgetTextField} onChange={ onChangeBudget}></TextField>
            <Button style={signUpButtonStyle} onClick={signUp} variant="outlined">Sign Up</Button>


        </div>
    </div>
}