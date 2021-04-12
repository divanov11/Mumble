import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../actions/authActions'
import Message from '../common/Message'

import { useForm } from '../hooks';

const LoginForm = () => {
  let dispatch = useDispatch()

  let auth = useSelector(state => state.auth)
  let {error} = auth

  const [formValues, fieldChanges] = useForm({ username: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formValues))
  };
  return (
    <>
      {error && <Message variant="error">{error}</Message>}
      <Message variant="warning">
        <p>Username: mumble</p>
        <p>Password: welcomemumble</p>
      </Message>
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
            required={true}
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
            required={true}
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
