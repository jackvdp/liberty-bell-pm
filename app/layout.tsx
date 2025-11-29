import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.libertybellpm.co.uk'),
    title: {
        default: "Liberty Bell Property Management",
        template: "%s | Liberty Bell Property Management",
    },
    description: "A property management company working for leaseholders. We put leaseholders' needs before profits, offering transparent and fair block management services.",
    keywords: [
        "property management",
        "block management",
        "leaseholder services",
        "right to manage",
        "RTM company",
        "resident management company",
        "RMC",
        "service charge",
        "building management",
        "heat networks",
        "leaseholder rights",
    ],
    authors: [{ name: "Liberty Bell Property Management" }],
    creator: "Liberty Bell Property Management",
    publisher: "Liberty Bell Property Management",

    icons: {
        icon: [
            { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicons/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { rel: 'android-chrome', url: '/favicons/android-chrome-192x192.png', sizes: '192x192' },
            { rel: 'android-chrome', url: '/favicons/android-chrome-512x512.png', sizes: '512x512' }
        ]
    },

    manifest: '/favicons/site.webmanifest',

    openGraph: {
        type: 'website',
        locale: 'en_GB',
        url: '/',
        siteName: 'Liberty Bell Property Management',
        title: 'Liberty Bell Property Management - Putting Leaseholders First',
        description: 'A property management company working for leaseholders. We put leaseholders\' needs before profits with transparent service charges and fair block management.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Liberty Bell Property Management',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        site: '@libertybellpm',
        creator: '@libertybellpm',
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    verification: {
        // Add your verification codes after registering with search engines
        // google: 'your-google-verification-code',
        // bing: 'your-bing-verification-code',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
            <link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
            <link rel="manifest" href="/favicons/site.webmanifest" />
        </head>
        <body className={`${inter.variable} font-inter antialiased`}>
        {children}
        </body>
        </html>
    );
}
