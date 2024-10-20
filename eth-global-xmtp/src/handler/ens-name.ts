import { HandlerContext } from "@xmtp/message-kit";
function extractEthDomain(str: string): string | null {
  const regex = /\b([a-zA-Z0-9-]+)\.eth\b/;
  const match = str.match(regex);
  return match ? match[1] : null;
}
export async function handleEns(context: HandlerContext, text: string) {
  const {
    message: {
      content: { command, params },
    },
  } = context;

  console.log(text);

  const baseUrl = "http://frames.hazybridge.com/";

  console.log("Searching ENS info");

  //split content and get last word
  let word = extractEthDomain(text);

  let ens_url = baseUrl + word;

  // TODO: send more information back, like connected social accounts
  context.send(`${ens_url}`);
}
