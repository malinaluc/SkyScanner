import { Button, TextField, Typography } from "@mui/material";
import { loginButtonStyle, pageStyle, parentDivStyle, skyScannerTextFieldStyle, signUpButtonStyle } from "./Login.styles";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';
import directFlight from "../img/directFlight.png";
import airplaneBackground from "../img/airplaneBackground.jpg"
import airplaneWallpaper from "../img/airplaneWallpaper1.webp"

import airplane from "../img/airplane.gif";

export const Login = (): JSX.Element => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        loadUsers();
    }, []); //[] -> ca sa ruleze o singura data

    const loadUsers = async () => {
        const resultUsers = await axios.get("http://localhost:8080/api/user/GetAllUsers")
        console.log(resultUsers.data);
    }

    const navigate = useNavigate();

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value)

    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value)

    }

    const login = async (event: any): Promise<void> => {
        try {
           /// navigate("/FirstPage");
            const check = await CheckEmailAndPassword(email, password);
            const checkAdmin = await CheckEmailAndPasswordAdmin(email, password);
            if (check) {
                navigate("/FirstPage");
            }
            else if (checkAdmin) {
                navigate("/AllInfoAdmin");
            } else {
                toast.error('Credențialele nu sunt corecte!', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error('Eroare la autentificare:', error);
        }
    };


    const CheckEmailAndPassword = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/login/${email}/${password}`);
            return response.data;
        } catch (error) {
            console.error('Eroare la verificarea credențialelor:', error);
            throw error;
        }
    };
    const CheckEmailAndPasswordAdmin = async (email: string, password: string): Promise<boolean> => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/loginAdmin/${email}/${password}`);
            return response.data;
        } catch (error) {
            console.error('Eroare la verificarea credențialelor:', error);
            throw error;
        }
    };

    const signUp = (event: any): void => {
        navigate("/SignUp")
    }



    return (
        <div style={pageStyle}>



            <Typography variant="h4" style={{ position: "relative", margin: "auto", textAlign: 'center', top: "20%", fontWeight: 'bold', color: 'white' }}>
                WELCOME TO SKY SCANNER
            </Typography>


            <img src={airplane} style={{ maxWidth: '10%', height: "auto" }} />

            <div style={parentDivStyle}>

                <div >
                    <TextField id="userName-textField" label="Username" variant="outlined" size="small" onChange={onChangeEmail} />
                    <FaUser style={{ marginLeft: '-250px', position: 'absolute', top: '10px', color: 'black' }} />
                </div>
                <div style={{ marginTop: 20 }}>
                    <TextField id="password-textField" label="Password" variant="outlined" type="password" size="small" onChange={onChangePassword} />
                    <FaLock style={{ marginLeft: '-250px', position: 'absolute', top: '70px', color: 'black' }} />
                </div>
                <Button style={loginButtonStyle} onClick={login} variant="outlined" >Login</Button>

                <Button style={signUpButtonStyle} onClick={signUp} variant="outlined">Sign Up</Button>
            </div>
        </div>


    );
}