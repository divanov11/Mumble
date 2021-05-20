import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../actions/authActions';
import { useForm } from '../hooks';
import { Button, Input, Message } from '../common';

const LoginForm = () => {
  let dispatch = useDispatch();

  let auth = useSelector((state) => state.auth);
  let { error } = auth;

  const [formValues, fieldChanges] = useForm({ username: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues));
  };
  return (
    <>
      {error && <Message variant="error">{error}</Message>}

      <form className="form" onSubmit={onSubmit} style={{ width: '100%' }}>
        <Input
          name="username"
          value={formValues.username}
          onChange={fieldChanges}
          required={true}
          label="Username:"
        />
        <Input
          name="password"
          value={formValues.password}
          type="password"
          onChange={fieldChanges}
          required={true}
          label="Password:"
        />
        <Button color="main" type="submit" text="Login" size="lg" loading={auth?.isLoading} />
        <span style={{ marginLeft: '1rem' }}>
          New here? <Link to="/signup">Sign up</Link>
        </span>
      </form>

      <Link style={{ marginTop: '1.5rem' }} to="/forgot-password">
        Forgot Password?
      </Link>
    </>
  );
};

export default LoginForm;
