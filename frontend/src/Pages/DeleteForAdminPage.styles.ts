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
    left: '30%',
    width: '200%',
    transform: 'translateY(-50%)',
    color: 'black',
  };
  const actionButtonStyle: React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
  };

  export const logOutButtonStyle: React.CSSProperties = {
    position: 'fixed',
    top: '10px',
    right: '30px',
    color: '#0071A2',
  };

  export const deleteFlightButtonStyle: React.CSSProperties = {
    ...actionButtonStyle,
    left: '-60%',
  };

  export const deleteUserButtonStyle: React.CSSProperties = {
    ...actionButtonStyle,
    left: '-10%',
  };
  export const seeAllUsersFlightsButtonStyle: React.CSSProperties = {
    ...actionButtonStyle,
    left: '0%',
  };

  export const createUserFlightButtonStyle: React.CSSProperties = {
    ...actionButtonStyle,
    left: '20%',
  };

  export const updateUserFlightButtonStyle: React.CSSProperties = {
    ...actionButtonStyle,
    left: '40%',
  };

  export const showUsersContainerStyle: React.CSSProperties = {
    marginTop: '70px'
  };



  //user
  
  export const IDToDeleteTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '40%',
    width: '20%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '80%',
  };

  export const deleteTheUserButtonStyle : React.CSSProperties = {
    position: 'relative',
    top: '20px',
    color: 'white',
    left : "40%"
  }

  ///flight
  export const showFlightsContainerStyle: React.CSSProperties = {
    marginTop: '70px'
  };
  
  export const deleteTheFlightButtonStyle : React.CSSProperties = {
    position: 'relative',
    top: '22px',
    color: 'white',
    left : "40%"
  };

  export const FlightIDToDeleteTextField: React.CSSProperties = {
    position: 'absolute',
    marginTop: '20px',
    left: '40%',
    width: '20%',
    transform: 'translateY(-50%)',
    color: 'black',
    top: '75%',
  };
