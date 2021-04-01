import React, { useState } from "react";

function PostForm() {
  const [message, setMessage] = useState("");

  /**
   * Function that is called when post form is submitted
   */
  const onFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data
    alert(`Creating new post with message: ${message}`);
    // Clear the form fields
    setMessage("");
  };

  /**
   * Function that updates the message hook to the form value
   */
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="card">
      <div className="card__body">
        <h3>Create Post</h3>
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
