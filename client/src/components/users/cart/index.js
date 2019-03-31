import React from 'react'
import { connect } from 'react-redux'
import { getCartItemCount } from '../../../actions/UserActions'

class UserCart extends React.Component {
    render() {
        return (
            <div>User Cart</div>
        )
    }
}

export default connect(
    null,
    { getCartItemCount }
)(UserCart)