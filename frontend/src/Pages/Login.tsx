import { Button, TextField } from "@mui/material";
import { loginButtonStyle, pageStyle, parentDivStyle, skyScannerTextFieldStyle } from "./Login.styles";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';

export const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate();

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value)
    }

    const login = (event: any): void => {
        const authenticationSuccessful = true;
        if(authenticationSuccessful){
        navigate("/FirstPage")}
    }

    return (
        <div>
        <TextField  id="skyscanner-textField" variant="outlined" size="medium" defaultValue="SKY SCANNER" style = {skyScannerTextFieldStyle} />
        
        <div style ={pageStyle}>
        <div style={parentDivStyle}>
        <div >
            <TextField id="userName-textField" label="Username" variant="outlined" size = "small"   onChange={onChangeEmail} />
            <FaUser style={{ marginLeft: '-250px', position: 'absolute', top: '10px', color: 'black' }} />
        </div>
        <div style={{ marginTop: 20 }}>
            <TextField id="password-textField" label="Password" variant="outlined" type = "password" size = "small" onChange={onChangePassword} />
            <FaLock style={{ marginLeft: '-250px', position: 'absolute', top: '70px', color: 'black' }} />
        </div>
        <Button style={loginButtonStyle} onClick={login} variant="outlined" >Login</Button>
    </div>
    </div>
    </div>
    );
}