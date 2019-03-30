import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItem } from '../../actions/UserActions'

class Items extends React.Component{
    componentDidMount() {
        this.props.getItem(this.props.match.params.id)
    }

    render() {
        if (!this.props.item) {
            return <div>...loading</div>
        }

        const item = this.props.item

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
                    {this.props.userAuth === 'true' ? <Link className='ui button' to={`/addtocart/${item._id}`}>Add to Cart</Link> : null}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        item: state.item[ownProps.match.params.id],
        userAuth: state.user.auth
    }
}

export default connect(
    mapStateToProps,
    { getItem }
)(Items)