const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

function setCache(res) {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  res.setHeader("Expires", date.toUTCString());
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}

app.use(
  express.static("client/build", {
    extensions: ["html"],
    setHeaders(res, path) {
      if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json|webp)$/)) {
        setCache(res);
      }
    },
  })
);

// app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`Listening to port ${port}...`);
});
