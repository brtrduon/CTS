import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItems } from '../../actions'

class Index extends React.Component {
    componentDidMount() {
        this.props.getItems()
    }

    renderItems = () => {
        return this.props.items.map(item => {
            // if (!item.name) {
            //     return (
            //         <div>Loading...</div>
            //     )
            // }
            return (
                <div className='item' key={item.id}>
                    <div className=''>
                        <h5>Item name: <Link to={`/edit/${item.id}`}>{item.name}</Link></h5>
                        <h5>{item.description ? `Item Description: ${item.description}` : null}</h5>
                        <h5>{item.brand ? `Brand: ${item.brand}` : null}</h5>
                        <h5>{item.item_type ? `Type of Item: ${item.item_type}` : null}</h5>
                        <h5>Product number: {item.item_number}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        <h5><Link to={`/delete/${item.id}`} className='ui button red'>Delete this item</Link></h5>
                    </div>
                </div>
            )
        })
    }

    render(){
        return (
            <div>
                <h2>Inventory</h2>
                <div className='ui celled list'>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: Object.values(state.item)
    }
}

export default connect(
    mapStateToProps, 
    { getItems }
)(Index)