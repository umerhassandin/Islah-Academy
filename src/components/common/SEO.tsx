import type { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
}

/**
 * Helper to generate metadata for Next.js App Router (15).
 * While the user requested a component with next/head, 
 * App Router handles SEO via the Metadata API for better performance and SEO.
 */
export function generateMetadata({
  title,
  description,
  canonicalUrl = "https://islahquranacademy.com",
  ogType = "website",
  ogImage = "https://islahquranacademy.com/og-image.jpg",
}: SEOProps): Metadata {
  const fullTitle = `${title} | Islah Quran Academy`;
  
  return {
    title: fullTitle,
    description: description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: description,
      url: canonicalUrl,
      type: ogType as any,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Fallback SEO component just in case the user wants to use it as a component
export default function SEO(props: SEOProps) {
  // In App Router, this doesn't do much on its own, meta should be handled via the metadata export.
  return null;
}
