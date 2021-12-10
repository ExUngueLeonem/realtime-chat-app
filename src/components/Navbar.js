import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const user = true;
    return (
        <AppBar color="primary" position="static">
            <Toolbar variant="dense">
                <Grid container justifyContent={"flex-end"}>
                    {user ?  
                        <Button color="inherit" variant={"outlined"}>Выйти</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button color="inherit" variant={"outlined"}>Логин</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;