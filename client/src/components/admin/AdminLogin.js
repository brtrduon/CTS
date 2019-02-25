import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../LoginForm'
import { adminLogin } from '../../actions'

class AdminLogin extends React.Component {
    onSubmit = formValues => {
        this.props.adminLogin(formValues)
    }

    render(){
        return (
            <div>
                <h3>Admin Login</h3>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { adminLogin })(AdminLogin)