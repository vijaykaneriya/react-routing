import React from 'react';
import { Route } from 'react-router-dom';
import Users from './../pages/users';
import Contact from './../pages/contact';
import Homepage from './../pages/home';

class DashboardRouter extends React.Component {
    render(){
        return (
            <div className="pages">
                <Route  exact path="/" component={Homepage} />
                <Route  path="/Users" component={Users} />
                <Route path="/Contact" component={Contact} />
            </div>
        );
    }
}

export default DashboardRouter;