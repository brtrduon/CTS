import React from 'react'
import ItemForm from './ItemForm'

class CreateItem extends React.Component {
    onSubmit = formValues => {
        console.log(formValues)
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

export default CreateItem