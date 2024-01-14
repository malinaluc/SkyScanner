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

  const textFieldCommonStyle: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '10%',
    width: '200%',
    transform: 'translateY(-50%)',
    color: 'black',
  };

  //user
  
  export const emailTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '-10%',
  };
  
  export const passwordTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '100%',
  };
  
  export const surnameTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '210%',
    height: '60px',
  };
  
  export const nameTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '320%',
  };
  
  export const budgetTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '430%',
  };
  export const IdTextField: React.CSSProperties = {
    ...textFieldCommonStyle,
    top: '540%',
  };
  
  export const logOutButtonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '10px',
    right: '30px',
    color: '#0071A2',
  };


  const actionButtonStyle: React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
  };

  export const updateUserButtonStyle : React.CSSProperties ={
    position: 'relative',
    top: '20px',
    color: 'white',
    left : "-60%"
  }

  export const updateAFlightButtonStyle : React.CSSProperties ={
    position: 'relative',
    top: '20px',
    color: 'white',
    left : "-40%"
  }
  

  export const seeAllUsersButtonStyle: React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
    left: '-30%',
  };

  export const createUserFlightButtonStyle: React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
    left: '30%',
  };
  
  export const deleteUserFlightButtonStyle: React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
    left: '40%',
  };

  export const updateAccountButtonStyle: React.CSSProperties = {
    position: 'relative',
    left: '100px',
    top: '400px',
    color: 'black',
  };

  //flight
  export const airlineTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '65%',
  };
  
  export const arrivalHourTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '70%',
  };
  export const departurelHourTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '75%',
  };
  export const durationTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '80%',
  };
  export const airplaneTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '85%',
  };
  export const IDTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '20%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '90%',
  };
  
  
  
  
  export const destinationAirportTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '65%',
  };
  
  export const pricenTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '70%',
  };
  export const gateTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '75%',
  };
  export const originAirportTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '80%',
  };
  
  export const departureDateTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '85%',
  };
  export const arrivalDateTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '50%',
    width: '30%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '90%',
  };


export const updateFlightButtonStyle: React.CSSProperties = {
  position: 'relative',
  top: '380px',
  color: 'black',
  left: '10%',
};