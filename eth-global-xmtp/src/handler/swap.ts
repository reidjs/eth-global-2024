import { HandlerContext } from "@xmtp/message-kit";


export async function handleSend(context: HandlerContext) {
  const {
    message: {
      content: { command, params },
    },
  } = context;

  const baseUrl = "ethereum:pay-0x72ea2A58a518EaF209B7D834B481DE6EBe170e2e@11155111?value=2e16";

  switch (command) {
    case "send":

      console.log("Handling send command");
      // Destructure and validate parameters for the swap command
      const { amount, token, address_to } = params;

      console.log(amount, token, address_to);

      if (!amount || !token || !address_to) {
        context.reply(
          "Missing required parameters. Please provide amount, token_from, and token_to."
        );
        return;
      }
      // Generate URL for the swap transaction
      console.log("Generating URL for swap transaction");
      let url_send = generateFrameURL(baseUrl, "send", {
        amount,
        token,
        address_to,
      });

      console.log(url_send);

      const baseImgUrl = 'http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=${google.com}&qzone=1&margin=0&size=250x250&ecc=L';
      const qrCodeUrl = baseImgUrl.replace('${DATA}', escape(url_send));
      context.send(`${qrCodeUrl}`);
      break;
    default:
      // Handle unknown commands
      context.reply("Unknown command. Use help to see all available commands.");
  }
}

// Function to generate a URL with query parameters for transactions
function generateFrameURL(
  baseUrl: string,
  transaction_type: string,
  params: any
) {
  // Filter out undefined parameters
  let filteredParams: { [key: string]: any } = {};

  for (const key in params) {
    if (params[key] !== undefined) {
      filteredParams[key] = params[key];
    }
  }
  let queryParams = new URLSearchParams({
    transaction_type,
    ...filteredParams,
  }).toString();
  return `${baseUrl}?${queryParams}`;
}