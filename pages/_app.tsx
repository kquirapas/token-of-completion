import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Polygon}
      sdkOptions={{
        gasless: {
          openzeppelin: {
            relayerUrl: process.env.NEXT_PUBLIC_RELAYER as string,
          },
        },
      }}
    >
      <Head>
        <title>Web3 Champion Reward Certificate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Mint your free Web3 Champion NFT for completing the workshop/training activity."
        />
        <meta
          name="keywords"
          content="Heroes Uprising, NFT, Community Pass, HUVERSE, heroesuprising, minting"
        />
        {/* Facebook */}
        <meta property="og:url" content="https://token-of-completion.vercel.app/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Web3 Champion Reward Certificate"/>
        <meta property="og:description" content="Mint your free Web3 Champion NFT for completing the workshop/training activity."/>
        <meta property="og:image" content="/preview.png"/>
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="https://token-of-completion.vercel.app/"/>
        <meta property="twitter:url" content="https://token-of-completion.vercel.app/"/>
        <meta name="twitter:title" content="Web3 Champion Reward Certificate"/>
        <meta name="twitter:description" content="Mint your free Web3 Champion NFT for completing the workshop/training activity."/>
        <meta name="twitter:image" content="/preview.png"/>
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
