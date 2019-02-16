import React from 'react'
import { connect } from 'react-redux'
import { getItems } from '../../actions'

class Index extends React.Component {
    componentDidMount() {
        this.props.getItems()
    }

    renderItems = () => {
        return this.props.items.map(item => {
            if (!item.name) {
                return (
                    <div>Loading...</div>
                )
            }
            return (
                <div className='item' key={item.id}>
                    <div className='content'>
                        <h5>Item name: {item.name}</h5>
                        <h5>Price (USD): {item.price}</h5>
                        <h5>Weight (oz): {item.weight}</h5>
                        <h5>Stock: {item.stock}</h5>
                        <h5>Product number: {item.item_number}</h5>
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