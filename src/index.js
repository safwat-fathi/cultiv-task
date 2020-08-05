import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Server } from "miragejs";

import "./index.css";

new Server({
  routes() {
    this.namespace = "/api";

    this.get("/posts", () => [
      {
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        author: {
          id: "1",
          name: "safwat",
        },
        content:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        next: "www.example.com",
        prev: "www.example.com",
        createdAt: "date",
      },
      {
        title: "qui est esse",
        author: {
          id: "2",
          name: "ali",
        },
        content:
          "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        next: "www.example.com",
        prev: "www.example.com",
        createdAt: "date",
      },
      {
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        author: {
          id: "3",
          name: "sara",
        },
        content:
          "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        next: "www.example.com",
        prev: "www.example.com",
        createdAt: "date",
      },
      {
        title: "eum et est occaecati",
        author: {
          id: "4",
          name: "karam",
        },
        content:
          "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae",
        next: "www.example.com",
        prev: "www.example.com",
        createdAt: "date",
      },
    ]);
  },
});

ReactDOM.render(<App />, document.getElementById("root"));
