import React from 'react'
import { Field, reduxForm } from 'redux-form'

class UserSignUpForm extends React.Component {
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
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='ui form error'>
                <Field name='username' component={this.renderInput} className='ui form error' label='Username*' />
                <Field name='email' type='email' component={this.renderInput} className='ui form error' label='Email*' />
                <Field name='firsst_name' component={this.renderInput} className='ui form error' label='First Name*' />
                <Field name='last_name' component={this.renderInput} className='ui form error' label='Last Name*' />
                <Field name='password' type='password' component={this.renderInput} className='ui form error' label='Password*' />
                <Field name='confirm_password' type='password' component={this.renderInput} className='ui form error' label='Confirm Password*' />
                <button className='ui button primary'>Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {}

    if (!formValues.username) {
        errors.username = 'Username is required'
    }

    if (formValues.username < 4) {
        errors.username='Username must be at least 4 characters'
    }

    if (!formValues.email) {
        errors.email = 'Email is required'
    }

    if (!formValues.first_name) {
        errors.first_name = 'First name is required'
    }
    
    if (!formValues.last_name) {
        errors.last_name = 'Last name is required'
    }

    if (!formValues.password || formValues.password.length < 6) {
        errors.password = 'Password length must be at least 6 characters'
    }

    if (formValues.password !== formValues.confirm_password) {
        errors.confirm_password = 'Passwords do not match'
    }

    return errors
}

export default reduxForm({
    form: 'userSignUpForm',
    validate
})(UserSignUpForm)