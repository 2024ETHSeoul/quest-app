import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

const externalContracts = {
  // number is the identifier of the specific chain
  // sepolia chain id: 11155111
  // DAI and WETH are two different contracts - contract name can be any name
  // as long as the names match
  // so to connect to the smart contract from frontend, get the name (e.g. DAI)
  // and address and abi of smart contract from the team that made those smart contracts.
  // abi is a list of all functions available in that contract (e.g. setGreeting function
  // inside 'YourContract' named contract)
  // DAI and WETH are both contractName
  // abi for each smart contract is created once that smart contract is deployed.
  11155111: {
    Tavern: {
      address: "0x399c41B16d2576D62fb9040Bb01aAa0597253Bca",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_questImplementation",
              type: "address",
            },
            {
              internalType: "address",
              name: "_escrowNativeImplementation",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ERC1167FailedCreateClone",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint32",
              name: "seekerId",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "solverId",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "address",
              name: "quest",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "escrowImplementation",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "paymentAmount",
              type: "uint256",
            },
          ],
          name: "QuestCreatedNative",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint32",
              name: "seekerId",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "uint32",
              name: "solverId",
              type: "uint32",
            },
            {
              indexed: false,
              internalType: "address",
              name: "quest",
              type: "address",
            },
            {
              indexed: false,
              internalType: "address",
              name: "escrowImplementation",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "paymentAmount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "address",
              name: "token",
              type: "address",
            },
          ],
          name: "QuestCreatedToken",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint32",
              name: "_seekerId",
              type: "uint32",
            },
            {
              internalType: "uint32",
              name: "_solverId",
              type: "uint32",
            },
            {
              internalType: "uint256",
              name: "_paymentAmount",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "infoURI",
              type: "string",
            },
          ],
          name: "createNewQuest",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "escrowNativeImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getBarkeeper",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "mediator",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "questImplementation",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "address",
              name: "benefactor",
              type: "address",
            },
          ],
          name: "recoverTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "reviewPeriod",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "keeper",
              type: "address",
            },
          ],
          name: "setBarkeeper",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "impl",
              type: "address",
            },
          ],
          name: "setEscrowNativeImplementation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_mediator",
              type: "address",
            },
          ],
          name: "setMediator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "impl",
              type: "address",
            },
          ],
          name: "setQuestImplementation",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "period",
              type: "uint256",
            },
          ],
          name: "setReviewPeriod",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
