import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { adminSignOut } from '../actions'
import { userSignOut } from '../actions/UserActions'

class Header extends React.Component {
    adminSignOut = () => {
        this.props.adminSignOut()
    }

    userSignOut = () => {
        this.props.userSignOut()
    }

    renderAdminAuth = () => {
        return (
            <div className='ui secondary pointing menu'>
                <Link className='item' to='/admin/index'>Admin Home</Link>
                <Link className='item' to='/admin/index'>View Items</Link>
                <Link className='item' to='/admin/users'>View Users</Link>
                <Link className='item' to='/admin/createitem'>Create Item</Link>
                {/* <Link className='item' to='/adminsignout'>Sign Out</Link> */}
                <button className='item' onClick={this.adminSignOut}>Sign Out</button>
            </div>
        )
    }

    renderUser = () => {
        if (this.props.userAuth) {
            return (
                <div className='ui secondary pointing menu'>
                     <Link className='item' to='/'>Home</Link>
                     <button className='item' onClick={this.userSignOut}>Sign Out</button>
                </div>
            )
        }

        return (
            <div className='ui secondary pointing menu'>
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='/signup'>Create an Account</Link>
                <Link className='item' to='/signin'>Sign In</Link>
            </div>
        )
    }

    render() {
        return (
            <div>{this.props.auth === 'true' ? this.renderAdminAuth() : this.renderUser()}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.admin.auth,
        userAuth: state.user.auth
    }
}

export default connect(
    mapStateToProps,
    { adminSignOut, userSignOut },
)(Header)