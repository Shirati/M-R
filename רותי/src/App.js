import './App.css';
import WorkSpace from './components/Workspace';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './colors';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <NavBar />
          <WorkSpace />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
