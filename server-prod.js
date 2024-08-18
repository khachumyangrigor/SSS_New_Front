const fs = require("fs");
const path = require("path");
const compression = require("compression");
const sirv = require("sirv");
const express = require("express");

const app = express();

// Enable gzip compression
app.use(compression());

// Serve static files from the client build using sirv
app.use(
  sirv(path.resolve(__dirname, "dist/client"), {
    dev: true,
    maxAge: false, // Cache static assets for one year
  })
);

app.use("*", async (req, res) => {
  try {
    const template = fs.readFileSync(
      path.resolve(__dirname, "./dist/client/index.html"),
      "utf-8"
    );
    // Load the server module using require instead of import
    const serverModule = require(path.resolve(
      __dirname,
      "./dist/server/server.cjs"
    ));
    const { render } = serverModule;

    // Ensure the render function is correctly called with URL and SSR manifest if needed
    const html = template.replace(`<!--outlet-->`, await render(req.url));

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (error) {
    console.error("Error during rendering:", error); // Log the error for debugging
    res.status(500).end("Internal Server Error"); // Send a generic error message to the client
  }
});

app.listen(5173, () => {
  console.log("Server running at http://localhost:5173");
});
