import { HandlerContext } from "@xmtp/message-kit";
import { ethers } from "ethers";


export async function handleSend(context: HandlerContext) {
  const {
    message: {
      content: { command, params },
    },
  } = context;

 
  const url = "https://frames-nextjs.vercel.app/frames?transaction=%20ethereum:pay-${address}@11155111?value=${amount}";

  switch (command) {
    case "send":

      console.log("Handling send command");
      // Destructure and validate parameters for the swap command
      const { amount, name } = params;

      console.log(amount, name);

      if (!amount || !name) {
        context.reply(
          "Missing required parameters. Please provide amount and address"
        );
        return;
      }
      // Generate URL for the swap transaction
      console.log("Generating URL for swap transaction");
      const provider = ethers.getDefaultProvider('mainnet'); // You can use 'homestead', 'mainnet', etc. as the default network
      let address= "0xB5cef47fDcd96ae7f718DeD9a94030736F809C51";
      
      if (address) {
          console.log(`${name} resolves to address: ${address}`);
      } else {
          console.log(`${name} does not resolve to an address. ${address}`);
          address = "0xB5cef47fDcd96ae7f718DeD9a94030736F809C51";
      }
      //transform amount to scientific notation

      const qrCodeUrl = url.replace("${address}", address).replace("${amount}", convertToScientificNotation(amount));
      context.send(`${qrCodeUrl}`);
      break;
    default:
      // Handle unknown commands
      context.reply("Unknown command. Use help to see all available commands.");
  }

  function convertToScientificNotation(num: number): string {
    if (num === 0) return "0";

    // Count how many times we need to shift the decimal to the right.
    let exponent = 18;
    let numString = num.toString();
    
    // For decimals, adjust the exponent by counting the number of digits after the decimal point.
    if (numString.includes('.')) {
        const decimalPlaces = numString.split('.')[1].length;
        exponent -= decimalPlaces; // Decrease exponent by the number of decimal places
        num = num * Math.pow(10, decimalPlaces); // Shift decimal to the right
    }

    // Convert the number to an integer (after shifting) and append the exponent
    return `${num}e${exponent}`;
}

}


// /send 0.1 0x1234