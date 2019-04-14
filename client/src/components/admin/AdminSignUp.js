import React from 'react'
import { connect } from 'react-redux'
import AdminSignUpForm from './AdminSignUpForm'
import { adminSignUp } from '../../actions'

class AdminSignUp extends React.Component {
    onSubmit = formValues => {
        this.props.adminSignUp(formValues)
    }

    render() {
        return (
            <div className='ui middle aligned stackable grid container'>
                <h1>Admin Sign Up</h1>
                <AdminSignUpForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { adminSignUp })(AdminSignUp)