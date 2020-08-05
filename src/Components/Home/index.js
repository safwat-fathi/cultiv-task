import React from "react";

import Post from "../Post";

const Home = (props) => {
  const { posts } = props;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Blog Posts</h2>

      {posts.map((post) => {
        return (
          <Post
            key={post.author.id}
            title={post.title}
            author={post.author}
            content={post.content}
            prev={post.prev}
            next={post.next}
            createdAt={post.createdAt}
          />
        );
      })}
    </div>
  );
};

export default Home;
