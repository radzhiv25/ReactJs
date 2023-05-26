import { useState } from "react";

export const PostForm = () => {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = (e) => {
    e.preventDefault()
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body: JSON.stringify({
            title:'foo',
            body:'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset = UTF-8'
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="">
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
