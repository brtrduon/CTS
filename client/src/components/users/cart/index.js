import React from 'react'
import { connect } from 'react-redux'
import { getCartItemCount } from '../../../actions/UserActions'

class UserCart extends React.Component {
    componentDidMount() {
        this.props.getCartItemCount(localStorage._id)
    }

    // renderCartItems = () => {
        
    // }

    render() {
        if (!this.props.cart) {
            return <div>Loading...</div>
        }

        console.log(this.props.cart.item)

        return (
            <div>User Cart</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: Object.values(state.cart)[0]
    }
}

export default connect(
    mapStateToProps,
    { getCartItemCount }
)(UserCart)