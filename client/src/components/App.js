import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

// user functionality
import UserIndex from './users'
import UserSignIn from './users/UserSignIn'
import UserSignUp from './users/UserSignUp'
import Items from './users/Items'
import AddToCart from './users/cart/AddToCart'

// admin functionality
import AdminLogin from './admin'
import RequireAuth from './admin/auth'
import AdminSignUp from './admin/AdminSignUp'

// admin items functionality
import AdminIndex from './admin/items'
import CreateItem from './admin/items/CreateItem'
import DeleteItem from './admin/items/DeleteItem'
import EditItem from './admin/items/EditItem'

// admin users functionality
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
                        <Route path='/item/:id' exact component={Items} />
                        <Route path='/addtocart/:id' exact component={AddToCart} />

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