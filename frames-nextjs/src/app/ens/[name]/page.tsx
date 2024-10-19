import { Metadata } from 'next';

interface PageProps {
  params: { name: string };
}

// Dynamic metadata function
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { name } = params;

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
          url: '/images/og-image.png',
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
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
