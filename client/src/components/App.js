import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import UsersIndex from './users'

import Admin from './admin'
import AdminIndex from './admin/AdminIndex'
import AdminLogin from './admin/AdminLogin'
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
                        <Route path='/' exact component={UsersIndex} />

                        {/* admin */}
                        <Route path='/admin' exact component={Admin} />
                        <Route path='/admin/index' exact component={AdminIndex} />
                        <Route path='/admin/login' exact component={AdminLogin} />
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