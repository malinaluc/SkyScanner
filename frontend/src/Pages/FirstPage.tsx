import { Button } from "@mui/material"
import { firstPageButtonStyle } from "./FirstPage.styles"
import { pageStyle } from "./FirstPage.styles"

export const FirstPage = (): JSX.Element =>{


     return <div style = {pageStyle}>
     <Button style={firstPageButtonStyle} variant="outlined" >Login</Button>
     </div>

};