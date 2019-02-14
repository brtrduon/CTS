import React from 'react'
import { Field, reduxForm } from 'redux-form'

class ItemForm extends React.Component {
    state = {
        img: null
    }

    renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className='ui error message'>
                    <div className='header'>{error}</div>
                </div>
            )
        }
    }

    renderInput = ({ input, label, meta, type }) => {
        const className=`field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off' type={type} />
                {this.renderError(meta)}
            </div>
        )
    }

    onChange = e => {
        console.log(e.target)
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='name' component={this.renderInput} label='Item Name*' />
                <Field name='description' component={this.renderInput} label='Item Description' />
                <Field name='brand' component={this.renderInput} label='Brand' />
                <Field name='item_type' component={this.renderInput} label='Type of Item' />
                <Field name='item_number' component={this.renderInput} label='Item Part Number*' />
                <Field name='price' component={this.renderInput} type='number' label='Price (USD)*' />
                <Field name='weight' component={this.renderInput} type='number' label='Weight (oz)*' />
                <Field name='stock' component={this.renderInput} type='number' label='Stock*' />
                <input name='img' type='file' label='Image' onChange={this.onChange} />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.name) {
        errors.name = 'Item name is required'
    }

    if (!formValues.item_number) {
        errors.item_number = 'Item number is required'
    }

    if (!formValues.price) {
        errors.price = 'Item price is required'
    }

    if (formValues.price <= 0) {
        errors.price = 'Item price must be greater than 0'
    }

    if (!formValues.weight) {
        errors.weight = 'Item weight is required'
    }

    if (!formValues.stock) {
        errors.stock = 'Item stock is required'
    }

    if (formValues.stock <= 0) {
        errors.stock = 'Stock must be greater than 0'
    }

    return errors
}

export default reduxForm({
    form: 'itemForm',
    validate
})(ItemForm)