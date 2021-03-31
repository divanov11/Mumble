import TopicTags from "../Components/TopicTags";
import discussions from "../data/discussions";
import userData from "../data/users";
const { useState } = require("react");
const { useHistory } = require("react-router-dom");

function TopicSearchPage({ location }) {
  let topics = discussions;
  let allTopics = topics.map((topic) => topic.tags).flat(1);
  console.log(allTopics);
  const history = useHistory();

  if (location.search.substring(0, 7) !== "?query=") {
    // If invalid query format redirect to https://site.com/find-user?query=
    history.push({
      pathname: "/find-topic",
      search: "?query=",
    });
  }

  const query = location.search.substring(7);

  const [queryInput, setQueryInput] = useState(query);

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  };

  const handleSubmit = () => {
    history.push({
      pathname: "/find-topic",
      search: `?query=${queryInput}`,
    });
  };

  const handleClick = (e) => {
    // gets the value of topic
    const topic = e.target.value;
    // adds the topic to interests to the first user if we have logged in user but we don't so will be fixed later on
    userData[0].interests.push(topic);
    // diplay user with the added topic
    console.log(userData[0]);
  };

  return (
    <div>
      {/* search for topic of interests */}
      <form onSubmit={handleSubmit}>
        <input value={queryInput} onChange={handleChange} type="text" />
      </form>
      <h1>Find a topic</h1>
      <h2>Query: {query}</h2>
      {/* diplay all the topic interests */}
      {allTopics
        .filter((topic) => {
          if (query == "") return topic;
          else if (topic.toLowerCase().includes(query.toLowerCase())) {
            return topic;
          }
        })
        .map((topic) => {
          return (
            <div>
              <small>click to add to topic interests</small>
              {/* add topic of interests */}
              <button onClick={handleClick} value={topic}>
                {topic}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TopicSearchPage;
