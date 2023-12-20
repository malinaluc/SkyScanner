import { useNavigate } from "react-router-dom";
import { pageStyle } from "./ResultsPage.styles";
import React from "react";
import { Box, Container, CssBaseline, Typography } from "@mui/material";

import flightTickets from "../img/flightTickets.png";
import planeTickets from "../img/plane-tickets.gif";

export const ResultsPage = (): JSX.Element =>{

    const navigate = useNavigate();


    return <div style = {pageStyle}>
        <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box sx={{ bgcolor: '#C0EDFF', height: '100vh' }}  >
        <img src={planeTickets} style={{ marginTop : '0px', maxWidth : "15%", left : "20%"}}  />
        <Typography variant="h6" style={{ left : "50%", color: 'blue' , marginTop : '20px', fontWeight: 'bold' }}>
         Results of your search 
       </Typography>
       </Box>
      </Container>
    </React.Fragment>
    

    </div>

};