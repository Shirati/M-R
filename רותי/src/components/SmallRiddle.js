import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigationAction } from '@mui/material';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import { HourglassTopIcon, HelpSharpIcon } from '@mui/icons-material';
import {
    List, ListItem, ListItemButton, ListItemText, ListItemAvatar,
    Divider, Avatar, Typography, Checkbox
} from '@mui/material';

export default function SmallRiddle({ id, name, img }) {

    return (
        <>
            <ListItem alignItems="flex-start" >
                {/* {withCheckbox && <Checkbox onChange={onCheck} />} */}
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={img} />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color='primary'
                            >

                            </Typography>
                        </React.Fragment>
                    }
                />
                <BottomNavigationAction
                    label="view"
                    value="view"
                    title=''
                    icon={<OpenInNewOutlinedIcon color='primary' />}
                    component={Link}
                    to={`/riddles/${id}`} />
            </ListItem>
            <Divider variant="inset" />
        </>
    )
}