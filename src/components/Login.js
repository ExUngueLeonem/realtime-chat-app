import {Button, Container, Grid} from "@material-ui/core";
import Box from "@material-ui/core/Box";

import React, { useContext } from 'react';
import {Context} from '../index';
import firebase from 'firebase';

const Login = () => {
const {auth} = useContext(Context);

const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
    //падает //console.log('onAuthStateChanged', onAuthStateChanged)
}

    return (
        <Container>
            <Grid container
                style={{height: window.innerHeight - 50}}
                alignItems={"center"}
                justifyContent={"center"}
                >
                <Grid style={{width:400, backgroundColor: 'lightgray'}}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;