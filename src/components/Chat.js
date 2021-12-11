import { Button, Container, Grid, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import Loader from './Loader';
import firebase from 'firebase';



import { doc, setDoc } from "firebase/firestore"; 

const Chat = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState();

    const [message, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
  
    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }

    if (loading) {
        return <Loader/>
    }

    return (
        <Container>
            <Grid 
                container
                style={{height: window.innerHeight - 50, marginBot: 10}}
                alignItems={"center"}
                justifyContent={"center"}
            >
            <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>
            </div>
            <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField 
                        fullWidth
                        rowsMax={2}
                        variant={'outlined'}
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Отправить</Button>
                </Grid>

            </Grid>
        </Container>
    );
};


export default Chat;