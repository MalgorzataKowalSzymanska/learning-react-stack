import { Field, reduxForm, formValueSelector } from 'redux-form';
import React from 'react';
import { Input } from '@material-ui/core';
import { connect } from 'react-redux';

const renderInput = props => <Input {...props.input} type="text" />;

let PersonForm = props => {
    const {
        handleSubmit,
        firstNameValue,
        lastNameValue,
        emailValue,
        addressValue
    } = props
    return (
        <>
            <h1>Redux-Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <Field name="firstName" component={renderInput} type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <Field name="lastName" component={renderInput} type="text" />
                </div>
                <div>
                    <label htmlFor="email">Emile: </label>
                    <Field name="email" component={renderInput} type="email" />
                </div>
                <div>
                    <label htmlFor="address">Address: </label>
                    <Field name="address" component={renderInput} type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>Your personal data: </h3>
                <p>Name: {firstNameValue} </p>
                <p>Last name: {lastNameValue}</p>
                <p>Email: {emailValue}</p>
                <p>Address: {addressValue}</p>

            </div>
        </>
    )
};
PersonForm = reduxForm({
    form: 'personDetails'
})(PersonForm)

const formSelector = formValueSelector('personDetails')

PersonForm = connect(state => {
    const firstNameValue = formSelector(state, 'firstName')
    const lastNameValue = formSelector(state, 'lastName')
    const emailValue = formSelector(state, 'email')
    const addressValue = formSelector(state, 'address')
    return {
        firstNameValue,
        lastNameValue,
        emailValue,
        addressValue
    }
})(PersonForm)


export default PersonForm
