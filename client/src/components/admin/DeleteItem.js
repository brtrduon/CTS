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

        const id = this.props.item.id
        
        return (
            <div>
                <h4>{`Are you sure you want to delete ${this.props.item.name}?`}</h4>
                <Link to='/' className='ui button primary'>No</Link>
                <button className='ui button red' onClick={() => this.props.deleteItem(id)}>Yes</button>
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