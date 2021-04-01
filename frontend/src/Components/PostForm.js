import React, { useState } from 'react';

function PostForm() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  /**
   * Function that is called when post form is submitted
   */
  const onFormSubmit = (e) => {
    e.preventDefault();
    // If the message is empty set the error state and return the function
    if (!message) {
      return setError('Post cannot be empty!');
    }

    // If it is valid message do something with the form data
    alert(`Creating new post with message: ${message}`);

    // Clear the form fields
    setMessage('');
  };

  /**
   * Function that updates the message hook to the form value
   */
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (error && e.target.value) {
      // if the there was an error & now it has a proper value set the error to null
      setError(null);
    }
  };

  return (
    <div className="card">
      <div className="card__body">
        <form className="form" onSubmit={onFormSubmit}>
          <div className="form__field">
            <textarea
              className="input input--textarea"
              name="message"
              id="message"
              placeholder="Share your brilliant thought!"
              onChange={handleMessageChange}
              value={message}
            ></textarea>

            {error && (
              <small
                style={
                  errorStyles // If there is an error show the error
                }
              >
                {error}
              </small>
            )}

            <button id="post-btn" className="btn btn--main" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;

const errorStyles = {
  color: 'rgb(220, 20, 60)', // bright red color
  fontWeight: 'bold',
  display: 'block',
};
