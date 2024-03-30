"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address, AddressInput } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();
  const [inputAddress, setInputAddress] = useState("");
  // const { data: someVariableName } = useScaffoldContractRead({
  //   contractName: "YourContract",
  //   functionName: "owner",
  //   args: ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
  // });
  // data: owner means when we get data returned
  // we'll refer to that data with variable name owner
  const { data: owner } = useScaffoldContractRead({
    // contractName = name of contract to read from
    contractName: "YourContract",
    // retrieves data returned by the "owner" function of the
    // "YourContract" smart contract
    // functionName = name of function to call
    // owner in function name has nothing to do with
    // owner in {data: owner}
    functionName: "owner",
    // args(optional) = array of arguments to pass to function
    // if it accepts any
    // args: ["0xd8da6bf26964af9d7eed9e03e53415d37aa96045"],
  });

  const { writeAsync: updateOwner } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "updateOwner",
    args: [inputAddress],
  });
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">title</h2>
            <div className="text-sm text-base-content">
              Connected Address:
              <Address address={address}></Address>
            </div>
            <div className="text-sm text-base-content">
              Owner Address:
              <Address address={owner}></Address>
            </div>
            <div className="text-sm text-base-content">
              New Owner Address:
              <AddressInput onChange={setInputAddress} value={inputAddress} placeholder="Input your address" />
            </div>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  updateOwner();
                }}
              >
                some button
              </button>
            </div>
          </div>
        </div>
        {/* Connected Address: <Address address={address} />
        <Balance address={address} /> */}
      </div>
    </>
  );
};

export default Home;
