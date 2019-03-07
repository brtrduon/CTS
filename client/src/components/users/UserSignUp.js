import React from 'react'
import { connect } from 'react-redux'
import UserSignUpForm from './UserSignUpForm'
import { userSignUp } from '../../actions/UserActions'

class UserSignUp extends React.Component {
    onSubmit = formValues => {
        this.props.userSignUp(formValues)
    }

    render() {
        return (
            <div>
                <h3>User Sign Up</h3>
                <UserSignUpForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { userSignUp })(UserSignUp)