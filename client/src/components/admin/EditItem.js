import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { getItem, editItem } from '../../actions'
import ItemForm from './ItemForm'

class EditItem extends React.Component {
    componentDidMount() {
        this.props.getItem(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.editItem(formValues, this.props.match.params.id)
    }

    render() {
        if (!this.props.item) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <ItemForm initialValues={_.pick(this.props.item, 'name', 'description', 'brand', 'item_type', 'item_number', 'price', 'weight', 'stock')} onSubmit={this.onSubmit} />
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
    { getItem, editItem }
)(EditItem)