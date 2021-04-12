import { Link } from 'react-router-dom';

import { useForm } from '../hooks';

const LoginForm = () => {
  const [formValues, fieldChanges] = useForm({ email: '', password: '' });
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__field">
          <label htmlFor="formInput#email">Email: </label>
          <input
            className="input input--email"
            id="formInput#email"
            type="email"
            name="email"
            placeholder="e.g. user@domain.com"
            value={formValues.email}
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
          <Link to="#">Forgot Password ?</Link>
        </p>
        <br/>
        <p>Don't have an account ? <Link to="/signup">Sign up</Link></p>

      </div>
    </>
  );
};

export default LoginForm;
