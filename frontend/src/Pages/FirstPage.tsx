import { Button, TextField } from "@mui/material"

import { departTextField, fromTextField, pageStyle, returnTextField, toTextField } from "./FirstPage.styles"

export const FirstPage = (): JSX.Element =>{


     return <div style = {pageStyle}>
     <TextField  id="from - TextField" variant="outlined" size="medium" defaultValue="From " style = {fromTextField} />
     <TextField  id="to - TextField" variant="outlined" size="medium" defaultValue="To " style = {toTextField} />
     <TextField  id="depart - TextField" variant="outlined" size="medium" defaultValue="Depart - Add date " style = {departTextField} />
     <TextField  id="return - TextField" variant="outlined" size="medium" defaultValue="Return - Add date " style = {returnTextField} />
     </div>

};