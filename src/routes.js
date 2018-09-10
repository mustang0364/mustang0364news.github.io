
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TechC from './TechC';
import Axios from './Axios';
import BuzzF from './BuzzF';


export default (
    
    <Switch>
        <Route path='/BuzzF' component={BuzzF} />
        <Route path='/Axios' component={Axios} />
        <Route path='/' component={TechC} />
    </Switch>

)