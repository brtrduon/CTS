import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import UserIndex from './users'
import UserSignIn from './users/UserSignIn'
import UserSignUp from './users/UserSignUp'

import AdminLogin from './admin'
import RequireAuth from './admin/auth'
import AdminSignUp from './admin/AdminSignUp'
import AdminIndex from './admin/AdminIndex'
import CreateItem from './admin/CreateItem'
import DeleteItem from './admin/DeleteItem'
import EditItem from './admin/EditItem'
import AdminUsersView from './admin/users'

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
                        <Route path='/admin/index' exact component={RequireAuth(AdminIndex)} />
                        <Route path='/admin/users' exact component={RequireAuth(AdminUsersView)}/>
                        <Route path='/admin/createitem' exact component={RequireAuth(CreateItem)} />
                        <Route path='/admin/edit/:id' exact component={RequireAuth(EditItem)} />
                        <Route path='/admin/delete/:id' exact component={RequireAuth(DeleteItem)} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App