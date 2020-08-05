import React from "react";

const Home = (props) => {
  const { posts } = props;

  return (
    <div>
      <h2>Blog posts</h2>

      {posts.map((post) => {
        return (
          <div key={post.author.id}>
            <h3>{post.title}</h3>
            <p>
              By {post.author.name} on {post.createdAt}
            </p>
            <p>{post.content}</p>
            <span>{post.prev}</span>
            <span>{post.next}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
