import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../../actions'

class AdminUsersView extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div>
                <h2>Users</h2>
                <div className='ui container celled grid centered'>
                
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