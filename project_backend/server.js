import express from "express";
import data from "./data.js";

const website_express = express();

//We create a port of 3002 if there is no working port processing in the environment
const port = process.env.PORT || 5000;

//If a call is made to this port, it would do the following
website_express.listen(port, () => {
  console.log("Connected to port", port);
});

//If a request is made to fetch data for products from front end, the response would be send from here
website_express.get("/api/products", (request, response) => {
  response.send(data.products);
});

//If a request is made to fetch data for category from front end, the response would be send from here
website_express.get("/api/category", (request, response) => {
  response.send(data.category);
});

//If a request is made to fetch data for category from front end, the response would be send from here
website_express.get("/api/slider", (request, response) => {
  response.send(data.sliderItems);
});
