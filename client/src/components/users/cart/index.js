import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartItemCount } from '../../../actions/UserActions'

class UserCart extends React.Component {
    componentDidMount() {
        this.props.getCartItemCount(localStorage._id)
    }

    renderCartItems = () => {
        if (!this.props.cart) {
            return <div>Loading...</div>
        }

        return this.props.cart.item.map(item => {
            return (
                <div className='ui equal width' key={item._id}>
                    <h5>Item name: <Link to={`/item/${item._id}`}>{item.name}</Link></h5>
                    <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                    <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                    <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                    <h5>Product number: {item.item_number}</h5>
                    <h5>Price (USD): {item.price}</h5>
                    <h5>Weight (oz): {item.weight}</h5>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Your Cart</h2>
                <div className='ui container celled grid centered'>
                    {this.renderCartItems()}
                </div>
            </div>
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