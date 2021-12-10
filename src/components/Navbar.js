import React from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar color="secondary" position="static">
            <Toolbar variant="dense">
                <Grid container justify={"flex"}>
                    <Button>Логин</Button>
                    <Button>Выйти</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;