import React from 'react';
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { adminSignOut } from '../actions'
import { userSignOut, getCartItemCount } from '../actions/UserActions'

class Header extends React.Component {
    componentDidMount() {
        this.props.getCartItemCount(localStorage._id)
    }

    adminSignOut = () => {
        this.props.adminSignOut()
    }

    userSignOut = () => {
        this.props.userSignOut()
    }

    cartItemCounter = () => {
        if (!this.props.cart) {
            return null
        }

        return (
            <div>({this.props.cart.item.length})</div>
        )
    }

    renderAdminAuth = () => {
        return (
            <div className='ui container'>
                <Link className='item' to='/admin/index'>Admin Home</Link>
                <Link className='item' to='/admin/index'>View Items</Link>
                <Link className='item' to='/admin/users'>View Users</Link>
                <Link className='item' to='/admin/createitem'>Create Item</Link>
                <button className='item hand' onClick={this.adminSignOut}>Sign Out</button>
            </div>
        )
    }

    renderUser = () => {
        if (this.props.userAuth === 'true') {
            return (
                <div className='ui container'>
                     <Link className='item' to='/'>Home</Link>
                     <div className='right menu'>
                        <Link className='item' to='/cart'>View Cart {this.cartItemCounter()}</Link>
                        <button className='ui button' onClick={this.userSignOut}>Sign Out</button>
                     </div>
                </div>
            )
        }

        return (
            <div className='ui container'>
                <Link className='item' to='/'>Home</Link>
                <div className='right menu'>
                    <Link className='ui primary button' to='/signup'>Create an Account</Link>
                    <Link className='ui button' to='/signin'>Sign In</Link>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='ui large fixed hidden grid menu'>
                {this.props.auth === 'true' ? this.renderAdminAuth() : this.renderUser()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.admin.auth,
        userAuth: state.user.auth,
        cart: Object.values(state.cart)[0]
    }
}

export default connect(
    mapStateToProps,
    { adminSignOut, userSignOut, getCartItemCount },
)(Header)