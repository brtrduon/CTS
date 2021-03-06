import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../LoginForm'
import history from '../../history'
import { adminLogin } from '../../actions'

class AdminLogin extends React.Component {
    componentDidMount() {
        if (this.props.auth === 'true') {
            history.push('/admin/index')
        }
    }

    onSubmit = formValues => {
        this.props.adminLogin(formValues)
    }

    render(){
        return (
            <div className='ui middle aligned stackable grid container'>
                <h1>Admin Login</h1>
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
    { adminLogin }
)(AdminLogin)