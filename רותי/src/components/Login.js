import React, {  useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import {  login } from "../store/userActions";
import { Navigate } from "react-router-dom";

import Stack from "@mui/material/Stack";


export default function Login() {
 
  const dispatch = useDispatch();
  const [ok, setOk] = useState(false);
  //const isUser = useSelector((state) => state.users.isUser);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userLogIn = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log(userLogIn);

    
    dispatch(login(userLogIn));
    setOk(true);
  
  }


  return (
    <>
      <Stack
        component="form"
        sx={{
          width: "25ch",
          "& .MuiTextFieldRoot": { m: 1, width: "25ch" },
          alignContent: "center",
          position: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
        spacing={2}
        noValidate
        autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
      >
        <TextField
          htmlFor="username"
          label="username"
          id="username"
          name="username"
          color="primary"
          focused
          required
        />
        <TextField
          htmlFor="password"
          type="password"
          id="password"
          name="password"
          label="password"
          color="primary"
          focused
          autoComplete="off"
          required
        />
        <Button
          sx={{
            alignContent: "center",
            position: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            borderWidth: "2px",
            marginTop: "14px",
          }}
          variant="outlined"
          type="submit"
          color="third"
        >
          אישור
        </Button>
      </Stack>

    
      {ok && <Navigate to={`/`} replace />}
    </>
  );
}
