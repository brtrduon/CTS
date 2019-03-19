import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../LoginForm'
import { adminLogin } from '../../actions'

class AdminLogin extends React.Component {
    componentWillUnmount() {
        localStorage.setItem('adminState', this.props.auth)
    }

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

const mapStateToProps = state => {
    return {
        auth: state.admin.auth
    }
}

export default connect(
    mapStateToProps, 
    { adminLogin })
(AdminLogin)