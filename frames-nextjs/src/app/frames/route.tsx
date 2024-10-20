/* eslint-disable react/jsx-key */
import { createFrames, Button } from "frames.js/next";
import QRCode from "qrcode"; // Import QRCode library

const frames = createFrames({
  basePath: "/frames",
});

const handleRequest = frames(async (req) => {
  // Extract the transaction parameter from the request
  console.log("Request:", req);
  const url = new URL(req.url); // Create a URL object
  const transaction = url.searchParams.get("transaction") || "Default value"; // Get the transaction query
  console.log("Transaction:", transaction);

  // Generate the QR code as a data URL
  const qrCodeDataUrl = await QRCode.toDataURL(transaction, { width: 100 }); // Set width to 100 pixels

  return {
    image: (
      <div style={{ width: "300px", height: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={qrCodeDataUrl} alt={`QR Code for transaction: ${transaction}`} style={{ width: "100%", height: "100%" }} /> {/* Adjust image size */}
      </div>
    ),
    buttons: [<Button action="post">Click me</Button>],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
