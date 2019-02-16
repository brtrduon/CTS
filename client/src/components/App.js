import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Index from './admin/Index'
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
                        <Route path='/' exact component={Index} />
                        <Route path='/create' exact component={CreateItem} />
                        <Route path='/edit/:id' exact component={EditItem} />
                        <Route path='/delete:id' exact component={DeleteItem} />
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App