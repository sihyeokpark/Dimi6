import localFont from '@next/font/local';
import { Metadata } from 'next'
import Head from 'next/head'

import Navigator from './components/Navigator';
import '../styles/globals.css'
 
export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
}

const SUIT = localFont({
  src: [
    {
      path: './font/SUIT-Thin.ttf',
      weight: '100',
    },
    {
      path: './font/SUIT-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: './font/SUIT-Light.ttf',
      weight: '300',
    },
    {
      path: './font/SUIT-Regular.ttf',
      weight: '400',
    },
    {
      path: './font/SUIT-Medium.ttf',
      weight: '500',
    },
    {
      path: './font/SUIT-SemiBold.ttf',
      weight: '600',
    },
    {
      path: './font/SUIT-Bold.ttf',
      weight: '700',
    },
    {
      path: './font/SUIT-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: './font/SUIT-Heavy.ttf',
      weight: '900',
    },
  ]
})

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${SUIT.className}`}>
      <Head>
        <title>Dimi6</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet"></link>
      </Head>
      <body>
        <Navigator></Navigator>
        {children}
      </body>
    </html>
  );
}