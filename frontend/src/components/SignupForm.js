import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks';
import Message from '../common/Message';
import { register } from '../actions/authActions';

const SignupForm = () => {
  let dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const [inputs, fieldChanges] = useForm({
    email: '',
    username: '',
    password: '',
    password1: '',
  });
  const onSubmit = (e) => {
    e.preventDefault();

    if (inputs['password'] !== inputs['password1']) {
      setMessage('Passwords do not match');
    } else {
      dispatch(register(inputs));
    }
  };
  return (
    <>
      {message && <Message variant="error">{message}</Message>}

      <form className="form" onSubmit={onSubmit}>
        <div className="form__field">
          <label htmlFor="formInput#email">Email: </label>
          <input
            className="input input--email"
            id="formInput#email"
            type="email"
            name="email"
            placeholder="e.g. user@domain.com"
            value={inputs.email}
            onChange={fieldChanges}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formInput#email">Username: </label>
          <input
            className="input input--email"
            id="formInput#username"
            type="text"
            name="username"
            placeholder="Username"
            value={inputs.username}
            onChange={fieldChanges}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formInput#password">Password: </label>
          <input
            className="input input--password"
            id="formInput#passowrd"
            type="password"
            name="password"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            value={inputs.password}
            onChange={fieldChanges}
          />
        </div>
        <div className="form__field">
          <label htmlFor="formInput#password">Confirm Password: </label>
          <input
            className="input input--password"
            id="formInput#passowrd1"
            type="password"
            name="password1"
            placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
            value={inputs.password1}
            onChange={fieldChanges}
          />
        </div>
        <input className="submit btn btn--main" type="submit" value="Sign Up" />
      </form>
      <div id="bottom-content">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};
export default SignupForm;
