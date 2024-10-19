const express = require("express");
const app = express();

app.get("/:slug", (req, res) => {
  const slug = req.params.slug;

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="of:accepts:xmtp" content="2024-02-09">
      <meta name="of:version" content="vNext">
      <meta name="${slug}" content="${slug}">
      <meta name="of:image" content="https://ens-og-image.ens-cf.workers.dev/name/${slug}.eth">
      <title>${slug.charAt(0).toUpperCase() + slug.slice(1)} Page</title>
    </head>
    <body>
      <h1>Welcome to the ${slug} page</h1>
    </body>
    </html>
  `);
});

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="default" content="default">
      <title>Default Page</title>
    </head>
    <body>
      <h1>Welcome to the home page</h1>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
