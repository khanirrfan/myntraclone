import React from 'react';
import PageDetails from '../PageDetails/PageDetails';
import { Route, Switch } from 'react-router-dom';
const Routing = () => {
    return (
        <>
            <Switch>
                <Route exact path = "/details" component ={PageDetails}/>
            </Switch>
        </>
    )
}

export default Routing;
