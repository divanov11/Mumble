import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserSearchPage({ location }) {
  const history = useHistory();

  if (location.search.substring(0, 7) !== '?query=') {
    history.push({
      pathname: '/find-user',
      search: '?query=',
    });
  }

  const query = location.search.substring(7);

  const [queryInput, setQueryInput] = useState(query);

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  };

  const handleSubmit = () => {
    history.push({
      pathname: '/find-user',
      search: `?query=${queryInput}`,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={queryInput} onChange={handleChange} type="text" />
      </form>

      <h1>Find a user</h1>
      <h2>Query: {query}</h2>
    </div>
  );
}

export default UserSearchPage;
