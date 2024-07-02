const express = require("express");
const cors = require("cors");
const connection = require("./connection");

const JobRoute = require("./routes/jobRoutes");
const CompanyRoute = require("./routes/companyRoutes")

const port = 3333;

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/job", JobRoute);
app.use('/company', CompanyRoute);

app.listen(process.env.port || port, () =>
  console.log(`Server is running on port ${port}`)
);