require('dotenv').config();
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
const corsOptions = {
  origin: ['http://localhost:5173'], // add your frontend's actual deployed URL here
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // specify allowed methods
  credentials: true, // include credentials (cookies, etc.)
  optionsSuccessStatus: 200 // some legacy browsers choke on 204
};
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());

app.use("/k", rootRouter);

app.listen(3000);
