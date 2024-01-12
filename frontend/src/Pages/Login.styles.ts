import React from "react"

export const pageStyle : React.CSSProperties ={
  background : 'linear-gradient(to bottom left, #ff99ff 0%, #990099 97%)',
  backgroundSize : 'cover',
  MozOsxFontSmoothing: "grayscale",
  WebkitTextSizeAdjust: "100%",
  minHeight: "80rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

}


export const parentDivStyle: React.CSSProperties = {
  position: "relative",
  margin: "auto",
  top: "0%",  
  transform: "translateY(-20%)",  
  color: 'black'
}

export const loginButtonStyle: React.CSSProperties = {
  position: "relative",
  left : 0,  
  top: 30,
  color: 'black'
}

export const signUpButtonStyle : React.CSSProperties = {
  position : "relative",
  left : 50,
  top : 30,
  color : 'black'
}

export const skyScannerTextFieldStyle : React.CSSProperties = {
  position: "absolute",  
  top: "20%", 
  left: "50%",  
  transform: "translateX(-50%) translateY(-50%)",  
  width: "100%",  
  fontSize: "100px",  
  color : 'black',
  textAlign : "center"
}
