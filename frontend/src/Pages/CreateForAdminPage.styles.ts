export const pageStyle: React.CSSProperties = {
  background: 'linear-gradient(to bottom left, #ff99ff 0%, #990099 97%)',
  backgroundSize: 'cover',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
  minHeight: '80rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const textFieldCommonStyle: React.CSSProperties = {
  position: 'absolute',
  marginTop: '20px',
  left: '10%',
  width: '200%',
  transform: 'translateY(-50%)',
  color: 'black',
};

export const emailTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '0%',
};

export const passwordTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '200%',
};

export const surnameTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '400%',
  height: '60px',
};

export const nameTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '600%',
};

export const budgetTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '800%',
};

export const createAccountButtonStyle: React.CSSProperties = {
  position: 'relative',
  left: '100px',
  top: '400px',
  color: 'black',
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

export const updateUserFlightButtonStyle: React.CSSProperties = {
  ...actionButtonStyle,
  left: '20%',
};

export const deleteUserFlightButtonStyle: React.CSSProperties = {
  ...actionButtonStyle,
  left: '40%',
};

export const seeAllUsersButtonStyle: React.CSSProperties = {
  ...actionButtonStyle,
  left: '0%',
};



export const createUserButtonStyle: React.CSSProperties = {
  ...actionButtonStyle,
  left: '-20%',
};

export const createFlightButtonStyle: React.CSSProperties = {
  ...actionButtonStyle,
  left: '-40%',
};


export const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '50%',
  marginTop: '10px',
};


///flight 

export const airlineTextField: React.CSSProperties = {
  ...textFieldCommonStyle,
  top: '600%',
};
