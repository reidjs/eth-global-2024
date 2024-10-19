import { Metadata } from 'next';

interface PageProps {
  params: { link: string };
}

// This metadata function will include the QR code URL dynamically
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // Generate the QR code image as Base64

  return {
    title: `QR Code for ${params.link}`,
    description: `Scan the QR code to visit the link: ${params.link}`,
    openGraph: {
      title: `QR Code for ${params.link}`,
      description: `Scan the QR code to visit the link: ${params.link}`,
      images: [
        {
          url: "https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=ethereum%3Apay-0x72ea2A58a518EaF209B7D834B481DE6EBe170e2e@11155111%3Fvalue%3D2e16%3Ftransaction_type%3Dsend%26amount%3D0.02%26token%3Deth%26address_to%3Dx012&qzone=1&margin=0&size=250x250&ecc=L",  // The Base64-encoded QR code as the image source
          width: 800,
          height: 800,
          alt: `QR Code for ${params.link}`,
        },
      ],
    },
  };
}
