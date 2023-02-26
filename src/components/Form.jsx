import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import "./form.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Form = ({ users, username, password, setPassword, setUsername }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
 
  
  
  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/users");
      localStorage.setItem("user", user.password);
      console.log("Login successful");
    } else {
      setOpen(true)
    }
  };
  return (
  <>
    <form onSubmit={handleLoginSubmit} className="form-control">
      <label htmlFor="user">Username</label>
      <input
        required
        id="user"
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />
      <label htmlFor="password">Password</label>
      <input
        required
        id="password"
        type="password"
        placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
      <button className="form-button" type="submit">
        <p>Login</p>
      </button>
    </form>
    <Snackbar
     open={open} 
     autoHideDuration={6000}
     onClose={handleClose}
     anchorOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
     >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Invalid username or password
        </Alert>
    </Snackbar>
  </>
  );
};

export default Form;
