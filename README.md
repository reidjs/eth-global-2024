# Open Frame
Dynamic previews for ENS in any XMTP client
[http://frames.hazybridge.com/](http://frames.hazybridge.com/)

## Features
- ENS Account Frame previews in XMTP clients
- Transaction QR code generation using the `/send` command

## Why
- Less context switching
- Improves XMTP user experience and convenience
- Improves trust indicators in XMTP

## How it works
- When Open Frame parses a ".eth" name in an xmtp message, it returns a Frame preview of the account
- The Frame is dynamic and can be used to directly interact with the account through a wallet provider
- Works in any XMTP client

