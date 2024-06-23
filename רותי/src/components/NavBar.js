import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useSelector } from 'react-redux';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import QuizIcon from '@mui/icons-material/Quiz';
import IsoIcon from '@mui/icons-material/Iso';
import Logo from './Logo';


function NavBar() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const isUser = useSelector(state => state.users.isUser)
    console.log(isUser);
    return (
        <>
       <BottomNavigationAction color='primary'   
                    icon   ={<Logo/> }
                />
            <BottomNavigation value={value} onChange={handleChange} sx={{ marginBottom: '40px' }} >
                <BottomNavigationAction
                    color='primary'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/"
                   
                />
              { !isUser&&<BottomNavigationAction
                    color='primary'
                    label="Login Manager"
                    value="Login Manager"
                    icon={<PersonAddAltOutlinedIcon color='secondary' />}
                    component={Link}
                    to="/login"
                />}
               {!isUser&& <BottomNavigationAction
                    color='primary'
                    label="Register Manager"
                    value="Register manager"
                    icon={<AppRegistrationIcon color='secondary' />}
                    component={Link}
                    to="/register"
                />}
                <BottomNavigationAction
                    color='primary'
                    label="Riddles"
                    value="riddles"
                    icon={<PsychologyAltIcon color='secondary' />}
                    component={Link}
                    to="/riddles"
                />
                     <BottomNavigationAction
                    color='primary'
                    label="Statistic"
                    value="Statistic"
                    icon={<QueryStatsIcon color='secondary' />}
                    component={Link}
                    to="/statistic"
                />
             {isUser&& <BottomNavigationAction
                    color='primary'
                    label="update manager"
                    value="UpManager "
                    icon={<ManageAccountsIcon color='secondary' />}
                    component={Link}
                    to="/UpUser"
                />}
                   {isUser&& <BottomNavigationAction
                    color='primary'
                    label="ActionCategory"
                    value="Action_Category"
                    icon={<IsoIcon color='secondary' />}
                    component={Link}
                    to="/action_category"
                />}
              {/*  isUser&& */}
                {<BottomNavigationAction
                    color='primary'
                    label="add riddle"
                    value="Add_Riddle"
                    icon={<QuizIcon color='secondary' />}
                    component={Link}
                    to="/addriddle"
                />}
            </BottomNavigation>
            
            
        </>);
};

export default NavBar;