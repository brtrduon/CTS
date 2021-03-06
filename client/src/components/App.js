import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'

// user functionality
import UserIndex from './users'
import UserSignIn from './users/UserSignIn'
import UserSignUp from './users/UserSignUp'
import ItemsUserView from './users/ItemsUserView'
import Item from './users/Item'
import UserCart from './users/cart'
import AddToCart from './users/cart/AddToCart'
import RemoveItemFromCart from './users/cart/RemoveItemFromCart'
import Checkout from './users/cart/Checkout'

// admin functionality
import AdminLogin from './admin/Home'
import RequireAuth from './admin/auth'
import AdminSignUp from './admin/AdminSignUp'

// admin items functionality
import AdminIndex from './admin/items'
import CreateItem from './admin/items/CreateItem'
import DeleteItem from './admin/items/DeleteItem'
import EditItem from './admin/items/EditItem'

// admin users functionality
import AdminUsersView from './admin/users'

import Contact from './Contact'
import Header from './Header'
import Footer from './Footer'
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        {/* users */}
                        <Route path='/' exact component={UserIndex} />
                        <Route path='/contact' exact component={Contact} />
                        <Route path='/signup' exact component={UserSignUp} />
                        <Route path='/signin' exact component={UserSignIn} />
                        <Route path='/items' exact component={ItemsUserView} />
                        <Route path='/item/:id' exact component={Item} />
                        <Route path='/cart' exact component={UserCart} />
                        <Route path='/cart/removeitem/:id' exact component={RemoveItemFromCart} />
                        <Route path='/addtocart/:id' exact component={AddToCart} />
                        <Route path='/cart/checkout' exact component={Checkout} />

                        {/* admin */}
                        <Route path='/admin' exact component={AdminLogin} />
                        <Route path='/admin/iusrfb38e^8623e' exact component={AdminSignUp} />
                        <Route path='/admin/index' exact component={RequireAuth(AdminIndex)} />
                        <Route path='/admin/users' exact component={RequireAuth(AdminUsersView)}/>
                        <Route path='/admin/createitem' exact component={RequireAuth(CreateItem)} />
                        <Route path='/admin/edit/:id' exact component={RequireAuth(EditItem)} />
                        <Route path='/admin/delete/:id' exact component={RequireAuth(DeleteItem)} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        </div>
    )
}

export default App