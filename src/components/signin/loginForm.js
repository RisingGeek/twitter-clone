import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Error } from '../styles/signin';

const validate = data => {
    const errors = {};
    if (!data.user)
        errors.user = 'Username/Email required';
    if (!data.password)
        errors.password = 'Password required';
    else if (data.password.length < 8)
        errors.password = 'Min length of password: 8'
    return errors;
}

const Input = ({
    input,
    type,
    placeholder,
    meta: { touched, error }
}) => (
        <React.Fragment>
            <input {...input} type={type} placeholder={placeholder} />
            {touched && error && <Error>{error}</Error>}
        </React.Fragment>
    );

let LoginForm = props => {
    const { credentialError, loginDisabled } = props;
    return (
        <form onSubmit={props.handleSubmit}>
            <Form>
                <div>
                    <Field type="text" name="user" component={Input} placeholder="Username or email" />
                    {credentialError.user && <Error>{credentialError.user}</Error>}
                </div>
                <div>
                    <Field type="password" name="password" component={Input} placeholder="password" />
                    {credentialError.password && <Error>{credentialError.password}</Error>}
                </div>
                <span style={{ display: 'flex', alignItems: 'center', margin: '0', height: '50px' }}>
                    <Button type="submit"
                        bg="rgb(255,255,255)"
                        color="rgb(29, 161, 242)"
                        hovbg="rgba(29,161,242,0.1)"
                        disabled={loginDisabled}
                    >
                        {loginDisabled ? 'Logging in' : 'Log in'}
                    </Button>
                </span>
            </Form>

        </form>
    );
}

LoginForm = reduxForm({
    form: 'login',
    validate
})(LoginForm);

export default LoginForm;
