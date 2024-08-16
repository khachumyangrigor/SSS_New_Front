import fs from "fs";
import path from "path";
import compression from "compression";
import sirv from "sirv";
import express from "express";
import { fileURLToPath } from "url";

const app = express();

// Enable gzip compression
app.use(compression());

// Serve static files from the client build using sirv
app.use(
  sirv(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist/client"),
    {
      dev: false,
      maxAge: false, // Cache static assets for one year
    }
  )
);

app.use("*", async (req, res) => {
  try {
    const template = fs.readFileSync("./dist/client/index.html", "utf-8");
    const { render } = await import("./dist/server/server.js");

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
