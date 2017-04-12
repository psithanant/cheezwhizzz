import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
// import RegisterButton from './signUp'
import {registerUser } from '../../actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({registerUser}, dispatch)
}

const mapStateToProps = (state) => {
  return {
    signUp: false
  }
}

class RegisterForm extends Component {
  render() {
    console.log("this is props", this.props);
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={
          // event.preventDefault();
         handleSubmit(this.props.registerUser)}>
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

export default connect(mapDispatchToProps, mapDispatchToProps)(reduxForm({
  form: 'Register' // a unique name for this form
})(RegisterForm));
