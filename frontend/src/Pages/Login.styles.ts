
export const pageStyle : React.CSSProperties ={
  background : 'linear-gradient(to bottom, #2F639A, #96C8FD)',
  //backgroundImage : 'url("C:\Users\clipa\OneDrive\Desktop\faculta\an3\sem1\is\frontend\public\img\airplaneBackground.jpg")',
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
  top: "50%",  
  transform: "translateY(-50%)",  
  color: 'black'
}

export const loginButtonStyle: React.CSSProperties = {
  position: "relative",
  left : 75,  
  top: 30,
  color: 'black'
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
