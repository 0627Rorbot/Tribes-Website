"use client";

import Web3, { MetaMaskProvider } from "web3";
import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import Link from "next/link";

const Header: React.FC = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
	(async () => {
		setProvider(await detectEthereumProvider());
	})()

	if(provider) {
		provider.on("disconnect", () => {
			console.log("disconnected");
		})
	}
  }, [provider])

  const initMetaMask = async () => {
    // const provider = (await detectEthereumProvider()) as any;
    try {
      if (provider) {
        await provider.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(provider);

        // Get accounts
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } else {
        setAccounts([]);
        console.error("MetaMask extension not found");
      }
    } catch (error) {
      	setAccounts([]);
      console.error("Error connecting to MetaMask:", error);
    } finally {
      	setLoading(false);
    }
  };

  return (
    <header className="flex flex-row items-center w-[100%] h-[100px] text-white px-[30px]">
      {/* Logo */}
      <div className="text-white font-bold font-chakra text-[40px] min-[400px]:mr-[30px]">
        LOGO
      </div>

      {/* Button Group */}
      <div className="w-[70%]">
        
        {/* Horizontal Menu */}
        <div className="w-full block grow min-[1107px]:flex min-[1107px]:items-center min-[1107px]:w-[100%] text-white max-[1107px]:hidden">
          <div className="min-[1107px]:flex min-[1107px]:flex-row min-[1107px]:justify-between min-[1107px]:w-[100%] text-[17px]">
            <Link href="/">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Home
              </span>
            </Link>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
              <div className="relative flex flex-col justify-center">
                <div className="relative items-center mx-auto">
                  <div
                    id="bouton"
                    className="relative group/bouton flex flex-row items-center"
                  >
                    <button className="relative text-white transition-all duration-200 hover:text-yellow-300">
                      Prophecy
                    </button>
                    <div className="text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 font-b group-hover/bouton:rotate-90 transition-all duration-200 hover:text-yellow-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-full text-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all border-white border w-[270px] rounded-[5px] bg-header z-10">
                      <ul className="text-center p-[10px] text-[15px]">
                        <li>
                          <a
                            href="#"
                            className=" transition-all duration-200 hover:text-yellow-300"
                          >
                            The Most High Chosen People
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className=" transition-all duration-200 hover:text-yellow-300"
                          >
                            The 12 Tribes of Israel Prophecy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </span>
            <Link href="/mintingPage">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Minting
              </span>
            </Link>
            <Link href="/#twelve">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                12 Tribes Roadmap
              </span>
            </Link>
            <Link href="/#map">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Map
              </span>
            </Link>
            <Link href="masterclassPage">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Masterclass
              </span>
            </Link>
            <Link href="/#drop">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Testimonial
              </span>
            </Link>
            <Link href="/#team">
              <span className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4 transition-all duration-200 hover:text-yellow-300">
                Team
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Connect Wallet */}
      <div className="w-[150px] cursor-pointer border rounded-[5px] text-center transition-all duration-200 hover:border-yellow-300 mr-[20px]">
        <h2 className="text-[17px] transition-all duration-200 hover:text-yellow-300">
          <button onClick={initMetaMask}>
            {accounts.length > 0
              ? `${accounts[0].slice(0, 6)}...${accounts[0].slice(-6)}`
              : "Connect Wallet"}
          </button>
        </h2>
      </div>

	  {/* Menu Icon */}
	  <div className={`block min-[1107px]:hidden text-white`}>
          <div className="relative">
            <div id="bouton" className="relative group/bouton">
              <button className="relative text-white">
                <svg
                  className="fill-current h-6 w-6 text-white"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              <div className="absolute right-0 top-full text-white origine-top opacity-0 hidden flex-col group-hover/bouton:flex group-hover/bouton:opacity-100 transition-all duration-200 border border-white rounded-[5px] hover:border-yellow-300 bg-header z-10 w-[170px]">
                <ul className="text-center p-[10px]">
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/">Home</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/#prophecy">Prophecy</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="mintingPage">Minting</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/#twelve">12 Trables Roadmap</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/#map">Map</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="masterclassPage">Masterclass</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/#drop">Testimonial</Link>
                  </li>
                  <li className=" transition-all duration-200 hover:text-yellow-300">
                    <Link href="/#team">Team</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </header>
  );
};
export default Header;
