const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const jsonParser = bodyParser.json();

var todos = [];

app.get("/health", (req, res) => {
  const successResponse = {
    status: "ok"
  };
  res.status(200).json(successResponse);
});

app.get("/todos", (req, res) => {
  res.status(200).json(todos);
});

app.post("/todos", jsonParser, (req, res) => {
  if (req.body.text) {
    todos.push({ id: todos.length, text: req.body.text });
    const successResponse = {
      status: "ok"
    };
    res.status(201).json(successResponse);
  } else {
    const errorResponse = {
      error: "Field 'text' is required"
    };
    res.status(400).json(errorResponse);
  }
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
});
