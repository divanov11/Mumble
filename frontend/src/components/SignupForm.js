import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks';
import Message from '../common/Message';
import { register } from '../actions/authActions';
import { Button, Input } from '../common';

const SignupForm = () => {
  let dispatch = useDispatch();

  const [message, setMessage] = useState('');

  let auth = useSelector((state) => state.auth);
  let { error } = auth;

  const [inputs, fieldChanges] = useForm({
    email: '',
    username: '',
    password: '',
    password1: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (inputs.password !== inputs.password1) {
      setMessage('Passwords do not match');
    } else {
      setMessage('');
      dispatch(register(inputs));
    }
  };

  return (
    <>
      {error && <Message variant="error">{error}</Message>}
      {message && <Message variant="error">{message}</Message>}

      <form className="form" onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="e.g. user@domain.com"
          value={inputs.email}
          onChange={fieldChanges}
          required={true}
          label="Email:"
          type="email"
        />
        <Input
          name="username"
          placeholder="e.g. dennisivy"
          value={inputs.username}
          onChange={fieldChanges}
          required={true}
          label="Username:"
        />
        <Input
          name="password"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={inputs.password}
          onChange={fieldChanges}
          required={true}
          label="Password:"
          type="password"
        />

        <Input
          name="password1"
          placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
          value={inputs.password1}
          onChange={fieldChanges}
          required={true}
          label="Confirm Password:"
          type="password"
        />

        <Button color="main" type="submit" text="Sign Up" size="lg" loading={auth?.isLoading} />
        <span style={{ marginLeft: '1rem' }}>
          Have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </>
  );
};
export default SignupForm;
