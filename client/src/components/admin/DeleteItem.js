import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getItem, deleteItem } from '../../actions'

class DeleteItem extends React.Component {
    componentDidMount() {
        this.props.getItem(this.props.match.params.id)
    }

    render() {
        if (!this.props.item) {
            return <div>Loading...</div>
        }

        const _id = this.props.item._id
        
        return (
            <div>
                <h4>{`Are you sure you want to delete product ${this.props.item.name}?`}</h4>
                <h5>{`(Product ID is ${this.props.item.item_number})`}</h5>
                <Link to='/' className='ui button primary'>No</Link>
                <button className='ui button red' onClick={() => this.props.deleteItem(_id)}>Yes</button>
            </div>
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
    { getItem, deleteItem }
)(DeleteItem)