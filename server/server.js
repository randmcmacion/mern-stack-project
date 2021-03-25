import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/post.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//const CONNECTION_URL = 'mongodb+srv://mis:Mis@09989688546@cluster0.aikms.mongodb.net/hgc-intranet?retryWrites=true&w=majority';
const LOCAL_CONNECTION_URL = "mongodb://127.0.0.1:27017";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(LOCAL_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
