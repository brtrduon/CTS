import React from 'react'
import { connect } from 'react-redux'
import ItemForm from './ItemForm'
import { createItem } from '../../../actions'

class CreateItem extends React.Component {
    onSubmit = formValues => {
        this.props.createItem(formValues)
    }
    
    render() {
        return (
            <div>
                <h3>Create an item</h3>
                <ItemForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, { createItem })(CreateItem)