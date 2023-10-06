import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Trusty Crypto Gaming</title>
      <meta name="title" content="Trusty Crypto Gaming" />
      <meta name="description" content="The first betting website 100% onchain. Your fun without scam!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content="Trusty Crypto Gaming" />
      <meta property="og:description" content="The first betting website 100% onchain. Your fun without scam!" />
      <meta property="og:image" content="" />

      {/* Twitter */}
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content="Trusty Crypto Gaming" />
      <meta property="twitter:description" content="The first betting website 100% onchain. Your fun without scam!" />
      <meta property="twitter:image" content="" />
    </Head>
  );
}
