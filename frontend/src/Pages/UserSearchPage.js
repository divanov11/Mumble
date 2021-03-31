import { useState } from "react";
import userData from "../data/users";
import { Link } from "react-router-dom";

function UserSearchPage() {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // This will be handled by the backend in future, why I haven't bothered making the code clean.
  let filteredData = userData.filter(
    (u) =>
      u.username.toLowerCase().includes(query.toLowerCase()) ||
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.interests
        .map((d) => {
          return d.toLowerCase();
        })
        .includes(query.toLowerCase())
  );

  return (
    <div>
      <form className="form">
        <input
          className="input input--text"
          value={query}
          onChange={handleChange}
          type="text"
        />
      </form>

      <h1>Find a user</h1>

      {filteredData.map((user) => (
        <Link key={user} to={`/users/${user.id}`}>
          <div className="user-card">
            <h3>{user.username}</h3>
            <h6>{user.name}</h6>
            <p>{user.bio}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UserSearchPage;
