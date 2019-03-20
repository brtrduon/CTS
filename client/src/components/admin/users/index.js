import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../actions'

class AdminUsersView extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            console.log(user)
            return (
                <div className='ui equal width' key={user._id}>
                    <h5>Username: {user.username}</h5>
                    <h5>Email: {user.email}</h5>
                    <h5>First Name: {user.first_name}</h5>
                    <h5>Last Name: {user.last_name}</h5>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className='ui container celled grid centered'>
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: Object.values(state.adminUsersCtrl)
    }
}

export default connect(
    mapStateToProps,
    { getUsers }
)(AdminUsersView)