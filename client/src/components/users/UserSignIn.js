import React from 'react'
import { connect } from 'react-redux'
import LoginForm from '../LoginForm'
import { userSignIn } from '../../actions/UserActions'

class UserSignIn extends React.Component {
    onSubmit = formValues => {
        this.props.userSignIn(formValues)
    }

    render() {
        return (
            <div>
                <h3>User Sign In</h3>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { userSignIn })(UserSignIn)