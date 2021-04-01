import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UserSearchPage({ location }) {
  // Using a ?query= parameter will add a lot of future flexibility, allowing us to make queries to this page as a redirect possibly.

  // Will need to figure out how to remove the URL formatting, if necessary.

  const history = useHistory();

  // Check query exists and is valid
  if (location.search.substring(0, 7) !== '?query=') {
    // If invalid query format redirect to https://site.com/find-user?query=
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
