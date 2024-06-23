import {Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, circularProgressClasses} from '@mui/material';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { SaveDetails } from '../services/authService';
// import { useNavigate } from 'react-router-dom';
import Stack from "@mui/material/Stack";

const cities = [
  'Jerusalem',
  'Tel Aviv',
  'Haifa',
  'Rishon LeZion',
  'Petah Tikva',
  'Ashdod',
  'Netanya',
  'Beer Sheva',
  'Holon',
  'Bnei Brak',
  'Ramat Gan',
  'Bat Yam',
  'Rehovot',
  'Herzliya',
  'Kfar Saba',
  'Modiin',
  // Add more cities as needed
];

export default function UserProfile() {
  // הגדרת משתנים סטייט לכל פרט משתמש
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleUpdeteUser = (e) => {
    e.preventDefault();
    console.log(`Details saved: firstName: ${firstName}, lastName: ${lastName}, address: ${address}, city: ${city}, email: ${email}`);
    dispatch(SaveDetails(e));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    // navigate('/Map');
  };

  return (
    <Stack
    component="form"
    sx={{
      width: "50ch",
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
    onSubmit={(event) => handleUpdeteUser(event)}
  >
   
       <Typography variant='h5' gutterBottom>
        Update User Profile
      </Typography>
      <TextField label='FirstName' variant='outlined' fullWidth margin='normal' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <TextField label='LastName' variant='outlined' fullWidth margin='normal' value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <TextField label='Address' variant='outlined' fullWidth margin='normal' value={address} onChange={(e) => setAddress(e.target.value)} />
       <Grid item xs={24}>
        <FormControl variant="outlined" >
        {/* fullWidth */}
            <InputLabel id="city-label">City</InputLabel>
            <Select
              labelId="city-label"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
            >
              {cities && cities.map((cityName) => (
                <MenuItem key={cityName} value={cityName}>{cityName}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      <TextField label='Email' variant='outlined' fullWidth margin='normal' value={email} onChange={(e) => setEmail(e.target.value)} />
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
          update
        </Button>
      
     
      ,{/* <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>שם: {firstName} {lastName}</p>
        <p style={{ fontSize: '18px' }}>מייל: {email}</p>
      </div> */}
      <Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
        <DialogTitle textAlign={'center'} id='alert-dialog-title'>
        {'Update Details'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>Your details have been successfully saved!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
      </Stack>
  
      )}
