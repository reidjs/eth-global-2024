import type { CommandGroup } from "@xmtp/message-kit";
import { handleSend } from "./handler/swap.js";
import { handleEns } from "./handler/ens-name.js";
export const commands: CommandGroup[] = [
  {
    name: "Send Bot",
    description: "Send bot for base.",
    triggers: ["/send", "@send", "@sendbot"],
    commands: [
      {
        command: "/send [amount] [token_from] [token_to]",
        handler: handleSend,
        description: "Send Eth to your friend.",
        params: {
          amount: {
            default: 10,
            type: "number",
          },
          token: {
            default: "eth",
            type: "string",
            values: ["eth", "dai", "usdc", "degen"], // Accepted tokens
          },
          address_to: {
            default: "x0123",
            type: "string",
            //values: ["eth", "dai", "usdc", "degen"], // Accepted tokenss
          },
        },
      },
      {

        command : "/ens [name]",
        handler: handleEns,
        description: "Search ENS domain",
        params: {
          name: {
            type: "string",
          }
        },

      }
      
    ],
  },
];