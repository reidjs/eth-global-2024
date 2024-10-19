/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";
 
const handleRequest = frames(async (ctx) => {
  return {
    image: "https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=$%7B%7D&qzone=1&margin=0&size=250x250&ecc=L",
    buttons: [
      <Button action="post" target={{ query: { value: "Yes" } }}>
        Say Yes
      </Button>,
      <Button action="post" target={{ query: { value: "No" } }}>
        Say No
      </Button>,
    ],
  };
});
 
export const GET = handleRequest;
export const POST = handleRequest;