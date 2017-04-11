import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import RegisterButton from './signUp'


class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props)}>
        <div>
          <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
        <Field name="password" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>

      {/* <RegisterButton/> */}
      </form>
    )
  }
}

export default reduxForm({
  form: 'Register' // a unique name for this form
})(RegisterForm);
