"use client";

import Image from "next/image";
import "@rainbow-me/rainbowkit/styles.css";
import type { NextPage } from "next";
import { parseEther } from "viem";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "Tavern",
    functionName: "createNewQuest",
    args: [0, 0, 10n, ""],
    value: parseEther("0.001"), // 0.01 eth/ether will be transferred
    onBlockConfirmation: transactionReceipt => {
      console.log("Transaction block hash", transactionReceipt.blockHash);
    },
  });
  return (
    <>
      <div className="navbar bg-base-100 flex">
        {/* logo start */}
        <div className="">
          <a className="btn btn-ghost text-xl">
            <Image src="/logo-quest.png" alt="" width={52} height={52} />
            <div className="font-sans text-base text-start">Quest</div>
          </a>
        </div>
        {/* logo end */}
        {/* menu start */}
        <ul className="menu menu-horizontal bg-base-200">
          <li className="mx-1">
            <a>HOME</a>
          </li>
          <li className="mx-1">
            <a>QUESTS</a>
          </li>
          <li className="mx-1">
            <a>SERVICES</a>
          </li>
          <li className="mx-1">
            <a>EXPLORE</a>
          </li>
        </ul>
        {/* ml auto = margin-left: auto, in tailwind */}
        <div className="flex gap-2 ml-auto">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <ul className="menu menu-horizontal bg-base-200 rounded-box">
            <li>
              <a className="tooltip flex" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                Order
              </a>
              {/* Order */}
            </li>
            <li>
              <a className="tooltip" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a className="tooltip" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="girl avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex ml-8 mr-8 items-center flex-col flex-grow pt-10">
        <div className="flex w-full gap-x-8">
          <div className="grid h-20 w-3/4 flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="flex gap-y-14 flex-col w-full border-opacity-50">
              <div className="grid justify-items-center items-center h-20 card border border-amber-500 rounded-br-lg bg-base-300 rounded-box place-items-center">
                <p className="w-5/6">Crafting seamless digital experiences with user-centric design.</p>
              </div>
              <div className="grid justify-items-center items-center h-20 card border bg-base-300 rounded-box place-items-center">
                <p className="w-5/6">Passionate UI/UX designer wants to create intuitive interfaces. Interaction ...</p>
              </div>
              <div className="grid justify-items-center items-center h-20 cardto create border bg-base-300 rounded-box place-items-center">
                <p className="w-5/6">UI/UX designer shaping innovative, user-friendly products.</p>
              </div>
              <div className="grid justify-items-center items-center h-20 card border bg-base-300 rounded-box place-items-center">
                <p className="w-5/6">Logo design for Web3 Project</p>
              </div>
            </div>
          </div>
          <div className="grid h-[500px] w-3/4 px-6 py-6 border border-amber-500 rounded-br-lg flex-grow card bg-base-300 rounded-box place-items-center">
            <div className="flex mx-8 flex-col h-full w-full border-opacity-50">
              <div className="flex items-center gap-4">
                <Image alt="person avatar" width={50} height={50} src="/profile1.png" />
                <div className="flex flex-col gap-1">
                  <strong>Andrew Alfred</strong>
                  <span>Technical advisor</span>
                </div>
              </div>
              <div className="divider"></div>
              <div className="grid h-full card bg-base-300 rounded-box justify-start">
                <p className="text-lg">Crafting seamless digital experiences with user-centric design.</p>
                <p className="text-xs text-stone-400">
                  #Graphic Design #UI/UX #UX Design #Landing Page #Illustration #Website Design
                </p>
                <p className="text-sm">
                  As a Senior Creative Branding Designer for Lightspeed game-related projects, you will be responsible
                  for creating innovative branding designs for marketing campaigns, brand building, version packaging,
                  and other similar initiatives. You will work in close coordiation with both the development and
                  marketing teams to formulate promotion strategies based on product milestones. Your role will also
                  involve generating proposals for creative planning and visual styles and bring them to life through
                  various forms of expression such as key visuals, posters, H5 pages, dynamic demonstrations, and ......
                </p>
                <button
                  onClick={() => {
                    writeAsync();
                  }}
                  className="btn btn-outline text-black bg-red-500"
                  disabled={isLoading}
                >
                  Initiate Transaction
                </button>
                <RainbowKitCustomConnectButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
