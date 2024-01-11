import { useNavigate } from "react-router-dom";
import { pageStyle, logOutButtonStyle } from "./ResultsPage.styles";
import React from "react";
import axios from "axios";

import { Box, Button, Container, CssBaseline, Typography } from "@mui/material";

import flightTickets from "../img/flightTickets.png";
import planeTickets from "../img/plane-tickets.gif";

export const ResultsPage = (): JSX.Element =>{

    const navigate = useNavigate();

    const logOut = (event : any) : void => {
      navigate("/Login")
   }


    return <div style = {pageStyle}>
        <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#FCD8F2', height: '100vh' }}  >
        <img src={planeTickets} style={{ marginTop : '0px', maxWidth : "15%", left : "20%"}}  />
        <Typography variant="h6" style={{ left : "50%", color: '#F207B2' , marginTop : '20px', fontWeight: 'bold' }}>
         Results of your search 
       </Typography>
       </Box>
      </Container>
      <Button style = {logOutButtonStyle} onClick = {logOut} variant = "outlined" > LogOut</Button>
    </React.Fragment>
    

    </div>

};