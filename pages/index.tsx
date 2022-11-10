import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import {
  ConnectWallet,
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { useNotify } from "../components/Notify";

const maxDegrees = 90;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLImageElement>(null);
  const { contract } = useContract(
    "0x1f356a9bC08dB319C28863Bc3976bCb14F4f90F4",
    "signature-drop"
  );
  const { data: metadata } = useContractMetadata(contract);
  const address = useAddress();
  const { notify } = useNotify();

  useEffect(() => {
    window.onmousemove = function (event) {
      if (!cardRef.current) return;
      var mouseX = event.pageX / window.innerWidth;
      var mouseY = event.pageY / window.innerHeight;
      var yDegrees = mouseX * maxDegrees - 0.5 * maxDegrees;
      var xDegrees = -0.5 * (mouseY * maxDegrees - 0.5 * maxDegrees);

      cardRef.current.style.transform =
        "rotateY(" + yDegrees + "deg) rotateX(" + xDegrees + "deg)";
    };
  }, []);

  const mint = async () => {
    if (!metadata || !address) return;

    const m = {
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
    };

    setLoading(true);
    try {
      // await contract?.createBatch([m, m, m, m, m, m, m, m, m, m]);
      const tx = await contract?.claimTo(address, 1);
      console.log(`tx: ${tx}`);
    } catch (err) {
      notify("error", String(err));
    }
    setLoading(false);
  };

  return (
    <main className="min-w-screen bg-hero bg-cover">
      <div className="flex h-full min-h-screen w-full flex-col items-center justify-center bg-dim p-8">
        <div className="flex w-full max-w-[600px] flex-col items-center text-center text-white">
          <img
            className="mb-16 w-full drop-shadow-2xl"
            ref={cardRef}
            src="/course_completer.png"
            alt="Course Completer Token"
          />
          <h1 className="text-3xl font-bold">Become a Web3 Champion</h1>
          <p className="mb-4">Get your token of completion below</p>
          <span className="mb-2">
            <ConnectWallet />
          </span>
          {address && (
            <button
              className="w-full max-w-[200px] rounded-xl border-2 border-transparent bg-black-pearl py-4 px-8 font-bold hover:border-white hover:bg-purple-heart"
              onClick={mint}
            >
              {loading ? "Loading..." : "Mint"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
