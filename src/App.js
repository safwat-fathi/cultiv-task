import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Components/Home";
import Login from "./Components/Login";
import Navigation from "./Components/Navigation";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/posts")
      .then((res) => {
        const posts = res.data;
        setPosts(posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          component={
            loading
              ? () => (
                  <div style={{ textAlign: "center" }}>Loading posts...</div>
                )
              : () => <Home posts={posts} />
          }
        />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
