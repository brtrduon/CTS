import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { adminSignOut } from '../actions'

class Header extends React.Component {
    onClick = () => {
        this.props.adminSignOut()
    }

    renderAdminAuth = () => {
        return (
            <div className='ui secondary pointing menu'>
                <Link className='item' to='/'>Home</Link>
                <Link className='item' to='/create'>Create Item</Link>
                {/* <Link className='item' to='/adminsignout'>Sign Out</Link> */}
                <button className='item' onClick={this.onClick}>Sign Out</button>
            </div>
        )
    }

    renderNoAuth = () => {
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
            <div>{this.props.auth ? this.renderAdminAuth() : this.renderNoAuth()}</div>
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
    { adminSignOut }
)(Header)