import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateUser } from '../store/userActions';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Stack from '@mui/material/Stack';

export default function UpdateUser(props) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.users.user)
    const [ok, setOk] = useState(false);
console.log(currentUser);

const isUser = useSelector(state => state.users.isUser)
console.log(isUser);
    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newUser = {
            id: currentUser.id,
            name: formData.get('name') !== "" ? formData.get('name') : currentUser.name,
            password: formData.get('password') !== "" ? formData.get('password') : currentUser.password
        };
        dispatch(updateUser(newUser));
        setOk(true)
    }
    // if (currentUser.name === "-1")
    //     return <Navigate to={`/Login/t`} replace />;

    return (
        <>
            <Stack
                component="form"
                sx={{
                    width: '25ch', '& .MuiTextFieldRoot': { m: 1, width: '25ch' },
                    alignContent: 'center',
                    position: 'center',
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    margin: 'auto'
                }}
                spacing={2}
                noValidate
                autoComplete="off"
                onSubmit={(event) => onSubmit(event)}
            >


                <TextField htmlFor="name" defaultValue={currentUser.name} label="name" id="name" name="name" color="primary" focused />
                <TextField htmlFor="password" defaultValue={currentUser.password} type='password' id="password" name="password" label="סיסמא" color="primary" focused />
                <TextField htmlFor="password" defaultValue={currentUser.email} type='password' id="password" name="password" label="סיסמא" color="primary" focused />
                <Button variant="outlined" type="submit" color='third' sx={{ borderWidth: "2px" }}>
                    אישור
                </Button>

                {ok && <Navigate to={`/`} replace />}
            </Stack>

        </>
    )


}



