import "../styles/globals.css";
import type { AppProps } from "next/app";

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Notify from "../components/Notify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Notify>
        <Component {...pageProps} />
      </Notify>
    </ThirdwebProvider>
  );
}
