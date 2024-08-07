"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [coins, setCoins] = useState(0);
  const [tap, setTap] = useState(2);
  const [cost, setCost] = useState(2);

  const handleUpgrade = () => {
    if (coins >= cost) {
      setTap(tap + 4);
      setCoins(coins - cost);
      setCost(cost * 2);
    }
  };

  return (
    <div className="text-center">
      <div className="mt-8"></div>
      <div className="text-3xl font-bold text-white">Tap To Earn</div>
      <div className="text-5xl font-medium mt-10 text-red-500">{coins}</div>
      <motion.button
        className="mt-8"
        onClick={() => setCoins(coins + tap)}
        whileTap={{ scale: 0.8 }}
      >
        <Image
          className="rounded-full pointer-events-none"
          src="/predator.jpg"
          alt="Image"
          width={300}
          height={300}
        />
      </motion.button>
      <br />
      <button
        onClick={handleUpgrade}
        className={`mt-10 text-3xl font-bold border-2 rounded-full px-4 py-2 ${
          coins >= cost
            ? "text-white border-white bg-transparent hover:bg-white hover:text-black"
            : "text-gray-500 border-gray-500 cursor-not-allowed"
        }`}
        disabled={coins < cost} // Disable button if coins are less than cost
      >
        Upgrade Tap: {cost}
      </button>
    </div>
  );
}
