import React, { useEffect } from "react";
import axios from "axios";
import { createUserFlightButtonStyle, deleteFlightButtonStyle, deleteUserButtonStyle, logOutButtonStyle, pageStyle, seeAllUsersFlightsButtonStyle, updateUserFlightButtonStyle } from "./DeleteForAdminPage.styles";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { seeAllUsersButtonStyle } from "./AllInfoAdmin.styles";

export const DeleteForAdminPage = () : JSX.Element => {
    const navigate = useNavigate();
    
    const logOut = (event: any): void => {
        navigate("/Login")
    }

    const deleteUser = (event : any) : void => {

    }
    const deleteFlight = (event : any) : void => {

    }

    const show = (event: any): void => {
        navigate("/AllInfoAdmin");
    }
    const create = (event: any): void => {
        navigate("/CreateForAdminPage");
    }

    const update = (event: any): void => {
        navigate("/UpdateForAdminPage");
    }


    return (
        <div style = {pageStyle}>
             <Button style={logOutButtonStyle} onClick={logOut} variant="outlined" > LogOut</Button>
             <div>
            <Typography variant="h5" style={{ color: 'white', fontWeight: 'bold', alignItems: "center", marginLeft: "30%" }}>
                        What do you want to delete ?

            </Typography>

            <Button style = {deleteUserButtonStyle} onClick = {deleteUser} variant = "outlined">Delete An User</Button>
            <Button style = {deleteFlightButtonStyle} onClick = {deleteFlight} variant = "outlined">Delete A Flight</Button>
            <Button style = {seeAllUsersFlightsButtonStyle} onClick = {show} variant = "outlined" >See All Users Or Flights</Button>
            <Button style = {createUserFlightButtonStyle} onClick = {create} variant = "outlined">Create Flight Or User</Button>
            <Button style = {updateUserFlightButtonStyle} onClick = {update} variant = "outlined" >Update User Or Flight</Button>

            </div>
        </div>
    )
}