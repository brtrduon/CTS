import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartItemCount } from '../../../actions/UserActions'

class UserCart extends React.Component {
    componentDidMount() {
        this.props.getCartItemCount(localStorage._id)
    }

    renderCartItems = () => {
        if (this.props.cart.item.length === 0) {
            return (
                <div className='row'>
                    <h5>Your cart is empty</h5>
                </div>
            )
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
                    <h5><Link className='ui button negative' to={`/cart/removeItem/${item._id}`}>Remove Item from cart</Link></h5>
                </div>
            )
        })
    }

    renderTotalPrice = () => {
        let subtotal = 0
        this.props.cart.item.map(item => {
            return subtotal += item.price
        })

        return subtotal
    }
    
    render() {
        if (!this.props.cart) {
            return <div>Loading...</div>
        }

        return (
            <div className='ui middle aligned stackable grid container'>
                <div className='row'>
                    <h2>Your Cart</h2>
                </div>
                <div className='ui celled centered'>
                    {this.renderCartItems()}
                </div>
                <div className='row'>
                    <h4>Subtotal: ${this.renderTotalPrice()}</h4>
                </div>
                <div className='row'>
                    {
                        this.props.cart.item.length === 0 ? null : <button className='ui button primary'>Proceed to Checkout</button>
                    }
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