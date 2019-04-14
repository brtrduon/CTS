import React from 'react'
import { Field, reduxForm } from 'redux-form'

class AdminSignUpForm extends React.Component {
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
                <input { ...input} autoComplete='off' type={type} />
                {this.renderError(meta)}
            </div>
        )
    }
    
    onSubmit = formValues => {
        this.props.onSubmit(formValues)
    }

    render() {
        return (
            <div className='ui container'>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                    <Field name='username' component={this.renderInput} label='Username*' />
                    <Field name='password' type='password' component={this.renderInput} label='Password*' />
                    <Field name='confirm_password' type='password' component={this.renderInput} label='Confirm Password*' />
                    <button className='ui button primary'>Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.username) {
        errors.username = 'Username is required'
    }

    if (!formValues.password) {
        errors.password = 'Password is required'
    }

    if (formValues.password !== formValues.confirm_password) {
        errors.confirm_password = 'Passwords do not match'
    }

    return errors
}

export default reduxForm({
    form: 'adminSignUpForm',
    validate
})(AdminSignUpForm)