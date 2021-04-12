import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'

import { login } from '../actions/authActions'


import { useForm } from '../hooks';

const LoginForm = () => {
  let dispatch = useDispatch()

  const [formValues, fieldChanges] = useForm({ username: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues))
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__field">
          <label htmlFor="formInput#email">Username: </label>
          <input
            className="input input--email"
            id="formInput#email"
            type="text"
            name="username"
            placeholder="e.g. dennisivy"
            value={formValues.username}
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
            value={formValues.password}
            onChange={fieldChanges}
          />
        </div>
        <input className="submit btn btn--main" type="submit" value="Login" />
      </form>
      <div id="bottom-content">
        <p>
          Dont have and Account? <Link to="/signup">Sign up</Link>
        </p>
        <p>
          <Link to="#">Forgot Password?</Link>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
