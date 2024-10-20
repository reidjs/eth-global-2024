import { Metadata } from 'next';

interface PageProps {
  params: { name: string };
}

// Dynamic metadata function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = params;

  const qrImageUrl = `http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=${name}&qzone=1&margin=0&size=1000x1000&ecc=L`;

  return {
    title: `${name} Page`,
    description: `This is the ${name} page.`,
    openGraph: {
      title: `${name} Page`,
      description: `This is the ${name} page.`,
      url: `/pages/${name}`,
      siteName: 'My Site',
      images: [
        {
          url: qrImageUrl,
          width: 100,
          height: 100,
          alt: `${name} QR Code`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    // Custom metadata for `of:image`
    other: {
      "of:image": qrImageUrl,
      "of:image:alt": `${name} QR Code`,
      "of:image:width": 10,
      "of:image:height": 10,
    },
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>{params.name}</h1>
      <p>My existing page</p>
    </div>
  );
}
