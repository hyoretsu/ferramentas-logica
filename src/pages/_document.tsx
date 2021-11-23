import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

export const siteName = 'Ferramentas de Lógica';

class MyDocument extends Document {
 render(): ReactElement {
  return (
   <Html>
    <Head>
     <link sizes="60x60" href="apple-touch-icon-60x60.png" />
     <link sizes="76x76" href="apple-touch-icon-76x76.png" />
     <link sizes="120x120" href="apple-touch-icon-120x120.png" />
     <link sizes="152x152" href="apple-touch-icon-152x152.png" />
     <link sizes="180x180" href="apple-touch-icon-180x180.png" />
     <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
     <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
     <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
     <link href="/safari-pinned-tab.svg" color="#fff" />
     <link rel="manifest" href="/site.webmanifest" />
     <meta name="application-name" content={siteName} />
     <meta name="apple-mobile-web-app-title" content={siteName} />
     <meta name="msapplication-TileColor" content="#fff" />
     <meta name="theme-color" content="#fff" />

     {/* eslint-disable-next-line @next/next/no-sync-scripts */}
     <script type="text/javascript" src="tau-prolog.js" />
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}

export default MyDocument;
