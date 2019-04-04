import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../../Modal'
import history from '../../../history'
import { getItem, removeItemFromCart } from '../../../actions/UserActions'

class RemoveItemFromCart extends React.Component {
    componentDidMount() {
        this.props.getItem(this.props.match.params.id)
        console.log(this.props.match.params.id)
    }

    renderActions = () => {
        const id = this.props.match.params.id

        return (
            <React.Fragment>
                <button onClick={() => this.props.removeItemFromCart(id)} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </React.Fragment>
        )
    }

    renderContent = () => {
        if (!this.props.item) {
            return `Loading...`
        }

        return `Are you sure you want to delete ${this.props.item.name} ?`
    }

    render() {
        return (
            <Modal
                title='Remove item from cart'
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/cart')}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.item[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    { getItem, removeItemFromCart }
)(RemoveItemFromCart)