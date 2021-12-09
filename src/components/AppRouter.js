import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {privateRoutes, publicRoutes,  } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const user = true;
    return user ? 
    (
        <React.Fragment>
        <Routes> //мапип объекты (пути, компоненты)
            {privateRoutes.map(({path, Component}) => 
                <Route path={path} element={Component}/>
            )}
        </Routes>
            <Navigate path={LOGIN_ROUTE}/>
        </React.Fragment>
    )
    :
    (
        <Routes>
            {publicRoutes.map(({path, Component}) => 
                <Route path={path} element={Component}/>
            )}
{/*             <Redirect to={LOGIN_ROUTE}/>
 */}
        </Routes>
    )
    
};

export default AppRouter;