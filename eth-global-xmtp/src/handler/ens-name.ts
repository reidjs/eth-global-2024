import { HandlerContext } from "@xmtp/message-kit";


export async function handleEns(context: HandlerContext, text: string) {
  const {
    message: {
      content: { command, params },
    },
  } = context;


  console.log(text);

  const baseUrl = "http://frames.hazybridge.com/";


  console.log("Searching ENS info");

  let ens_url = baseUrl + text;

  context.send(`${ens_url}`);

}
