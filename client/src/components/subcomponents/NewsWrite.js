import React, { useState } from "react";
import { keccak256 } from "js-sha3";

const NewsWrite = () => {
  const [password, setPassword] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hash the password using Keccak-256
    const hashedPassword = keccak256(password);

    try {
      const res = await fetch("http://localhost:5000/api/save-news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hashedPassword, newsContent }),
      });

      const data = await res.json();
      setResponse(data.message);
    } catch (error) {
      setResponse("An error occurred.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>News Content:</label>
          <textarea
            value={newsContent}
            onChange={(e) => setNewsContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Save News</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
};

export default NewsWrite;
