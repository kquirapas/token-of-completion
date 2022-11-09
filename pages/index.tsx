import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import {
  useAddress,
  useContract,
  useContractMetadata,
} from "@thirdweb-dev/react";

const maxDegrees = 90;

export default function Home() {
  const [loading, setLoading] = useState(false);
  const cardRef = useRef<HTMLImageElement>(null);
  const { contract } = useContract(
    "0x782Bf3a7B689C615A631EA8F4DE1D348DeBc5483"
  );
  const { data: metadata } = useContractMetadata(contract);
  const address = useAddress();

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
    await contract?.erc721.mintTo(address, m);
    setLoading(false);
  };

  return (
    <main className="min-w-screen flex min-h-screen items-center justify-center bg-hero bg-cover">
      <div className="flex w-full max-w-[600px] flex-col items-center text-white">
        <img
          className="mb-16 w-full drop-shadow-2xl"
          ref={cardRef}
          src="/course_completer.png"
          alt="Course Completer Token"
        />
        <h1 className="text-3xl font-bold">Become a Web3 Champion</h1>
        <p className="mb-4">Get your token of completion below</p>
        <button
          className="w-[200px] rounded-xl border-2 border-transparent bg-black-pearl py-4 px-8 font-bold hover:border-white hover:bg-purple-heart"
          onClick={mint}
        >
          {loading ? "Loading..." : "Mint"}
        </button>
      </div>
    </main>
  );
}
