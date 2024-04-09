const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "..", "client", "dist")));

// Define API endpoints
app.get("/pricing", (req, res) => {
  res.status(200).json({ message: "Pricing page" });
});

// All remaining requests return the React app
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
