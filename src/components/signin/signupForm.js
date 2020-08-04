import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, Error } from "../styles/signin";

const validate = (data) => {
  const errors = {};
  if (!data.firstname) errors.firstname = "Firstname required";
  if (!data.lastname) errors.lastname = "Lastname required";
  if (!data.username) errors.username = "username required";
  if (!data.email) errors.email = "Email required";
  if (!data.dob) errors.dob = "Date of birth required";
  if (!data.password) errors.password = "Password required";
  else if (data.password.length < 8)
    errors.password = "Min length of password: 8";
  else if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Password do not match";

  return errors;
};

const Input = ({ input, type, placeholder, meta: { touched, error } }) => (
  <React.Fragment>
    <input {...input} type={type} placeholder={placeholder} />
    {touched && error && <Error>{error}</Error>}
  </React.Fragment>
);

let SignupForm = (props) => {
  const { userError, loginDisabled } = props;
  return (
    <form onSubmit={props.handleSubmit}>
      <Form twoField>
        <div>
          <Field
            type="text"
            name="firstname"
            component={Input}
            placeholder="Firstname"
          />
        </div>
        <div>
          <Field
            type="lastname"
            name="lastname"
            component={Input}
            placeholder="Lastname"
          />
          {/* {credentialError.password && (
            <Error>{credentialError.password}</Error>
          )} */}
        </div>
      </Form>
      <Form twoField>
        <div>
          <Field
            type="text"
            name="username"
            component={Input}
            placeholder="Username"
          />
          {userError.username && <Error>{userError.username}</Error>}
        </div>
        <div>
          <Field
            type="email"
            name="email"
            component={Input}
            placeholder="Email"
          />
          {userError.email && <Error>{userError.email}</Error>}
        </div>
      </Form>
      <Form twoField>
        <div>
          <Field
            type="password"
            name="password"
            component={Input}
            placeholder="Password"
          />
        </div>
        <div>
          <Field
            type="password"
            name="confirmPassword"
            component={Input}
            placeholder="Confirm Password"
          />
        </div>
      </Form>
      <Form single>
        <div>
          <Field
            type="date"
            name="dob"
            component={Input}
            placeholder="Date of birth"
          />
        </div>
      </Form>
      <Button
        type="submit"
        bg="rgb(255,255,255)"
        color="rgb(29, 161, 242)"
        hovbg="rgba(29,161,242,0.1)"
        disabled={loginDisabled}
      >
        Sign Up
      </Button>
    </form>
  );
};

SignupForm = reduxForm({
  form: "signup",
  validate,
})(SignupForm);

export default SignupForm;
