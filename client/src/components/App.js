import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import UserIndex from './users'
import UserSignIn from './users/UserSignIn'
import UserSignUp from './users/UserSignUp'

import AdminLogin from './admin'
import Auth from './admin/auth'
import AdminSignUp from './admin/AdminSignUp'
import AdminIndex from './admin/AdminIndex'
import CreateItem from './admin/CreateItem'
import DeleteItem from './admin/DeleteItem'
import EditItem from './admin/EditItem'

import Header from './Header'
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div className='ui container'>
                    <Header />
                    <Switch>
                        {/* users */}
                        <Route path='/' exact component={UserIndex} />
                        <Route path='/signup' exact component={UserSignUp} />
                        <Route path='/signin' exact component={UserSignIn} />

                        {/* admin */}
                        <Route path='/admin' exact component={AdminLogin} />
                        <Route path='/admin/iusrfb38e^8623e' exact component={AdminSignUp} />
                        <Route path='/admin/index' exact component={AdminIndex} />
                        <Route path='/create' exact component={CreateItem} />
                        <Route path='/edit/:id' exact component={EditItem} />
                        <Route path='/delete/:id' exact component={DeleteItem} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App