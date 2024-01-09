import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8000;

// Define Routes
app.get("/", (req, res) =>
  res.json({
    message: "Hello from Express Server 👋🏻",
  })
);

app.get("/health", (req, res) =>
  res.json({ message: "Everything is healthy 👀" })
);

// Start the Express Server
app.listen(PORT, () =>
  console.log(`Express Application Started on PORT ${PORT}`)
);
