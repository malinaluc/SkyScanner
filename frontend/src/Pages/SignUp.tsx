import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

import axios from "axios";
import { emailTextField, pageStyle, containerStyle, passwordTextField, surnameTextField, nameTextField, budgetTextField, signUpButtonStyle} from "./SignUp.styles";
import { Button, TextField, Typography } from "@mui/material";

import newAccount from "../img/new-account.png";


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [budget, setBudget] = useState('');
}

const signUp = (event : any) : void =>{

}

export const SignUp = () : JSX.Element => {
    return <div style = {pageStyle}>

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
    <Button style = {signUpButtonStyle} onClick = {signUp} variant = "outlined">Sign Up</Button>
    

    </div>
    </div>
}