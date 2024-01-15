import { Button, Select, TextField, Typography, InputLabel, MenuItem} from "@mui/material"



import { cabinClassTextField, departTextField, fromSelect, fromTextField, logOutButtonStyle, numberOfTravellersTextField, pageStyle, returnTextField, searchButtonStyle, toSelect, toTextField } from "./FirstPage.styles"

import amsterdam from "../img/amsterdam.jpg";
import paris from "../img/paris.jpg";
import madrid from "../img/madrid.jpg";
import milano from "../img/milano.jpg";
import dubai from "../img/dubai.jpg";
import airplane from "../img/airplane.png"
import traveller from "../img/traveller.png"
import zakynthos from "../img/zakynthos.jpg"

import axios from "axios";

import { useNavigate } from "react-router-dom";
import React from "react";

export const FirstPage = (): JSX.Element =>{

     const navigate = useNavigate();

     const search = (event : any) : void =>{
          navigate("/ResultsPage")
     }

     const logOut = (event : any) : void => {
          navigate("/Login")
     }


     const [from, setFrom] = React.useState('');

     const numeOrase =['Cluj-Napoca','Bucharest','Antalya','Istanbul','Bologna','Milan','Rome','Naples','Basel','Zurich','Barcelona','Madrid','Malaga','Valencia','Paris Beuvais','Lyon','Nice','Eindhoven','Amsterdam','London','Manchester','Zakynthos','Mykonos','Santorini'];

     const props = {
          options : [
               {name : "Cluj", value : 1},
               {name : "Bucharest", value : 2}
          ],
          handleSelect : (event: { target: { value: any; }; }) => alert(`you choose ${event.target.value}`)
     };

     return <div style = {pageStyle}>
     
     <img src = {airplane} style = {{ marginTop : 0}} ></img>
     
     <Select labelId = "fromSelect-label" id = "fromSelect" value = {from} label ="From" style = {fromSelect}></Select>

   
     <TextField  id="depart - TextField" variant="outlined" size="medium" label="Depart - Add date " style = {departTextField} />
     <TextField  id="return - TextField" variant="outlined" size="medium" label="Return - Add date " style = {returnTextField} />
     <TextField  id="numberOfTravellers - TextField" variant="outlined" size="medium" label="Number of travellers " style = {numberOfTravellersTextField} />
     <TextField  id="cabinClass - TextField" variant="outlined" size="medium" label="Cabin class " style = {cabinClassTextField} />
     <Button style={searchButtonStyle} onClick = {search}  variant="outlined" >Search</Button>
     <Button style = {logOutButtonStyle} onClick = {logOut} variant = "outlined" > LogOut</Button>

      <Typography variant="h5" style={{ color: '#F207B2' , marginTop : '100px', fontWeight: 'bold' }}>
        Where to, traveller? 
      </Typography>

     <img src={traveller} style={{ marginTop : '20px', maxWidth : "100%"}}  />

     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop : '100px' }}>
     <img src={paris} style={{ margin: 'auto', width: '15%' }} alt="Paris" />
     <img src={dubai} style={{ margin: 'auto', width: '15%' }} alt="Dubai" />
     <img src={madrid} style={{ margin: 'auto', width: '15%' }} alt="Madrid" />
     <img src={milano} style={{ margin: 'auto', width: '15%' }} alt="Milano" />
     <img src={zakynthos} style={{ margin: 'auto', width: '15%' }} alt="Zakynthos" />
     </div>

     </div>

};