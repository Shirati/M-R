import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { addUser, login } from "../store/userActions";
import { Navigate } from "react-router-dom";
import Stack from "@mui/material/Stack";

export default function Register(props) {
  const dispatch = useDispatch();
  const [ok, setOk] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log(newUser);
    dispatch(addUser(newUser));
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
          htmlFor="email"
          type="email"
          id="email"
          name="email"
          label="email"
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
          required
          autoComplete="off"
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
