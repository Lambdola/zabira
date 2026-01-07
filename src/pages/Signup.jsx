import React from "react";
import SVGZabira from "../svgs/Zabira";
import SVGAltCoinGraphic from "../svgs/AltCoinGraphic";

function ProgressBar() {
  return (
    <ul className="flex gap-1 items-center">
      <li className="h-1 w-4 rounded-sm bg-[#ffffff]"></li>
      <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
      <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
      <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
    </ul>
  );
}

function BgOne() {
  return (
    <>
      <div className="h-[50%] bg-green-500/50 bg-cover">
        <SVGAltCoinGraphic />
      </div>
      <div>
        <h2>Easily Buy & Sell Cryptocurrencies, Giftcards & Pay Bills</h2>
        <p>Manage your assets and portfolio easily!</p>

      </div>
    </>

  );
}

function Signup() {
  return (
    <div className="bg-[#F4F4F5] h-screen w-full p-4 flex gap-4 overflow-auto">
      <aside className=" h-full overflow-hidden w-[30%] max-w-100 sticky top-0 rounded-2xl bg-linear-to-b from-[#003B8D] to-[#000000]">
        <div className="absolute h-full bg-red- w-full">
          <BgOne />

        </div>

        <div className="relative p-9 h-full flex flex-col justify-between">
          <div>
            <SVGZabira />
          </div>
          <ProgressBar />
        </div>
        {/* <div className="absolute bottom-0 w-full p-9 bg-red-500">
          <ul className="flex gap-1 items-center">
            <li className="h-1 w-4 rounded-sm bg-[#ffffff]"></li>
            <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
            <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
            <li className="h-1 w-4 rounded-sm bg-[#52525B]"></li>
          </ul>
        </div> */}
      </aside>
      <main className="h-[200vh] w-full bg-green-500"></main>
    </div>
  );
}

export default Signup;
