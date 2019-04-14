import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItems } from '../../actions'
import { addToCart } from '../../actions/UserActions'

class UserIndex extends React.Component {
    state = {
        item_type: 'All',
        brand: 'All'
    }

    componentDidMount() {
        this.props.getItems()
    }

    // filter stuff
    item_type = () => {
        let loop = this.props.items.map(item => {
            return item.item_type
        })

        let newArr = Array.from(new Set(loop))

        return newArr.map(item_type => {
            return <option key={item_type} value={item_type}>{item_type}</option>
        })
    }
    
    brand = () => {
        let loop = this.props.items.map(item => {
            return item.brand
        })

        let newArr = Array.from(new Set(loop))

        return newArr.map(brand => {
            return <option key={brand} value={brand}>{brand}</option>
        })
    }


    onChange = e => {
        let name = e.target.name
        let value = e.target.value
        
        this.setState({
            [name]: value
        })
    }

    renderFilter = () => {
        return (
            <div className='item'>
                <label>Item Type</label>
                <select name='item_type' onChange={this.onChange}>
                    <option value='All'>All</option>
                    {this.item_type()}
                </select>
                <label>Brand</label>
                <select name='brand' onChange={this.onChange}>
                    <option value='All'>All</option>
                    {this.brand()}
                </select>
            </div>
        )
    }

    renderItems = () => {
        if (this.state.brand === 'All' && this.state.item_type === 'All') {
            return this.props.items.map(item => {
                return (
                    <div className='ui equal width doubling' key={item._id}>
                        <h5>Item name: <Link to={`/item/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        {this.props.userAuth === 'true' ? <Link className='ui button' to={`/addtocart/${item._id}`}>Add to Cart</Link> : null}
                    </div>
                )
            })
        }

        if (this.state.brand === 'All' && this.state.item_type !== 'All') {
            return this.props.items.filter(item => 
                item.item_type === this.state.item_type
                ).map(item =>
                    <div className='ui equal width' key={item._id}>
                        <h5>Item name: <Link to={`/item/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        {this.props.userAuth === 'true' ? <Link className='ui button' to={`/addtocart/${item._id}`}>Add to Cart</Link> : null}
                    </div>
            )
        }

        if (this.state.brand !== 'All' && this.state.item_type === 'All') {
            return this.props.items.filter(item => 
                item.brand === this.state.brand
                ).map(item =>
                    <div className='ui equal width' key={item._id}>
                        <h5>Item name: <Link to={`/item/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        {this.props.userAuth === 'true' ? <Link className='ui button' to={`/addtocart/${item._id}`}>Add to Cart</Link> : null}
                    </div>
            )
        }
        
        return this.props.items.filter(item => 
            item.item_type === this.state.item_type && item.brand === this.state.brand
            ).map(item =>
                <div className='ui equal width' key={item._id}>
                    <h5>Item name: <Link to={`/item/${item._id}`}>{item.name}</Link></h5>
                    <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                    <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                    <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                    <h5>Product number: {item.item_number}</h5>
                    <h5>Price (USD): {item.price}</h5>
                    <h5>Weight (oz): {item.weight}</h5>
                    <h5>Stock: {item.stock}</h5>
                    {this.props.userAuth === 'true' ? <Link className='ui button' to={`/addtocart/${item._id}`}>Add to Cart</Link> : null}
                </div>
        )
    }

    render(){
        return (
            <div className='ui middle aligned stackable grid container'>
                <div className='row'>
                    <h2>Items</h2>
                </div>
                <div className='ui divider'>
                    {this.renderFilter()}
                </div>
                <div className='ui fluid celled grid centered'>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: Object.values(state.item),
        userAuth: state.user.auth
    }
}

export default connect(
    mapStateToProps, 
    { getItems, addToCart }
)(UserIndex)