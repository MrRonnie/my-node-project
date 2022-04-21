const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my Smarty Smarty Home!!");
});

const users = [
  {
    id: 1,
    name: "Sabana",
    email: "sabana@gmail.com",
    phone: "01788822228",
  },
  {
    id: 2,
    name: "Jhulekha",
    email: "Jhulekha@gmail.com",
    phone: "01788822228",
  },
  {
    id: 3,
    name: "Shabnoor",
    email: "Shabnoor@gmail.com",
    phone: "01788822228",
  },
  {
    id: 4,
    name: "Chirolota",
    email: "Chirolota@gmail.com",
    phone: "01788822228",
  },
  {
    id: 5,
    name: "Shorolota",
    email: "Shorolota@gmail.com",
    phone: "01788822228",
  },
  {
    id: 6,
    name: "Punnotaa",
    email: "Punnotaa@gmail.com",
    phone: "01788822228",
  },
  {
    id: 7,
    name: "Madhobilota",
    email: "Madhobilota@gmail.com",
    phone: "01788822228",
  },
];

// filter by search query parameter

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name;
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id == id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("fruits", (req, res) => {
  res.send(["mango", "apple", "orange"]);
});

app.get("/fruits/mango/fazle", (req, res) => {
  res.send("sour soud fazle flavor");
});

app.listen(port, () => {
  console.log("Listening to port", port);
});
