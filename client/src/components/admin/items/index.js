import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import history from '../../../history'
import { getItems } from '../../../actions'

class AdminIndex extends React.Component {
    state = {
        item_type: 'All',
        brand: 'All'
    }

    componentDidMount() {
        if (this.props.auth === "false") {
            history.push('/admin')
        }
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

    // admin page view
    renderItems = () => {
        if (this.state.brand === 'All' && this.state.item_type === 'All') {
            return this.props.items.map(item => {
                return (
                    <div className='ui equal width' key={item._id}>
                        <h5>Item name: <Link to={`/admin/edit/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        <h5><Link to={`/admin/delete/${item._id}`} className='ui button red'>Delete this item</Link></h5>
                    </div>
                )
            })
        }

        if (this.state.brand === 'All' && this.state.item_type !== 'All') {
            return this.props.items.filter(item => 
                item.item_type === this.state.item_type
                ).map(item =>
                    <div className='ui equal width' key={item._id}>
                        <h5>Item name: <Link to={`/admin/edit/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        <h5><Link to={`/admin/delete/${item._id}`} className='ui button red'>Delete this item</Link></h5>
                    </div>
            )
        }

        if (this.state.brand !== 'All' && this.state.item_type === 'All') {
            return this.props.items.filter(item => 
                item.brand === this.state.brand
                ).map(item =>
                    <div className='ui equal width' key={item._id}>
                        <h5>Item name: <Link to={`/admin/edit/${item._id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        <h5><Link to={`/admin/delete/${item._id}`} className='ui button red'>Delete this item</Link></h5>
                    </div>
            )
        }
        
        return this.props.items.filter(item => 
            item.item_type === this.state.item_type && item.brand === this.state.brand
            ).map(item =>
                <div className='ui equal width' key={item._id}>
                    <h5>Item name: <Link to={`/admin/edit/${item._id}`}>{item.name}</Link></h5>
                    <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                    <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                    <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                    <h5>Product number: {item.item_number}</h5>
                    <h5>Price (USD): {item.price}</h5>
                    <h5>Weight (oz): {item.weight}</h5>
                    <h5>Stock: {item.stock}</h5>
                    <h5><Link to={`/admin/delete/${item._id}`} className='ui button red'>Delete this item</Link></h5>
                </div>
        )
    }

    render(){
        return (
            <div>
                <h2>Inventory</h2>
                {this.renderFilter()}
                <div className='ui container celled grid centered'>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: Object.values(state.item),
        auth: state.admin.auth
    }
}

export default connect(
    mapStateToProps, 
    { getItems }
)(AdminIndex)