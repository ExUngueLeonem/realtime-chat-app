import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';


const AppRouter = () => {
    const user = true;
    return user ? 
    (
        <Switch>
            {privateRoutes.map(({path, Component}) => 
                <Route path={path} component={Component}/>
            )}
        </Switch>
    )
    :
    (
        <Switch>

        </Switch>
    )
    
};

export default AppRouter;