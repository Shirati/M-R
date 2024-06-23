// src/App.js
import React, {useState} from 'react';
import SignIn from './components/SignIn';
import Login from './components/Login';
import {Route, Router} from 'react-router-dom';
import {Container, Switch} from '@mui/material';
import GoogleMap from './components/GoogleMap';
import Test from './test';
import UserProfile from './components/UserProfile';
import Maps from './components/Maps';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles';
import NavigationBar from './components/NavigationBar';
import WorkSpace from './components/Workspace';
import {theme} from './color'

function App() {
  return (
    <>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <WorkSpace />
    </ThemeProvider>
  </BrowserRouter>

</>
  );
}

export default App;
