import React from 'react'
import { Link } from 'react-router-dom'

class UserIndex extends React.Component {
    render(){
        return (
            <div className='ui middle aligned stackable grid container'>
                <div className='row'>
                    <h1>Carb Tech Solution</h1>
                </div>
                <div className='row centered'>
                    Some header / image goes here ("featured items" ?)
                </div>
                <div className='row centered'>
                    <div className='three wide column black'>One</div>
                    <div className='three wide column'>Two</div>
                    <div className='three wide column'>Three</div>
                </div>
                <div className='row centered'>
                    Some other feature / promo
                </div>
                <div className='row centered'>
                    <div className='three wide column black'>One</div>
                    <div className='three wide column'>Two</div>
                    <div className='three wide column'>Three</div>
                </div>
                <div className='row centered'>
                    Employee one (?)
                </div>
                <div className='row centered'>
                    Employee two (?)
                </div>
            </div>
        )
    }
}

export default UserIndex