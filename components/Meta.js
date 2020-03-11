import Head from 'next/head';

// oure custome meta header and other stuff for SEO ..... , 
const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="/favicon.png" />
    <title>Trend Movies</title>
  </Head>
);

export default Meta;
