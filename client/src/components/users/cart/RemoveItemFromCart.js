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

    renderContentBackground = () => {
        if (!this.props.item) {
            return `Loading...`
        }

        return (
            <div className='ui container celled grid centered'>
                <div className='ui equal width'>
                    <h5>Item name: {item.name}</h5>
                    <h5>Item Description: {item.description}</h5>
                    <h5>Brand: {item.brand}</h5>
                    <h5>Type of Item: {item.item_type}</h5>
                    <h5>Product number: {item.item_number}</h5>
                    <h5>Price (USD): {item.price}</h5>
                    <h5>Weight (oz): {item.weight}</h5>
                    <h5>Stock: {item.stock}</h5>
                </div>
            </div>
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
                contentBackground={this.renderContentBackground()}
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