import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes,  } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import {useAuthState} from 'react-firebase-hooks/auth';

const AppRouter = () => {
    const user = useAuthState();
    //const user = false;
    return user ? 
    (
        <Routes>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<Navigate replace to={CHAT_ROUTE}/>}/>
        </Routes>
    )
    :
    (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<Navigate replace to={LOGIN_ROUTE}/>}/>

        </Routes>
    )
    
};

export default AppRouter;