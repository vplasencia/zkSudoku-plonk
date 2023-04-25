# zkSudoku smart contracts

This folder was generated using [Hardhat](https://github.com/NomicFoundation/hardhat) and contains all the smart contracts used in the zkSudoku application.

There are two smart contracts:

- `Sudoku`: for game logic (generate boards, verify boards).
- `sudokuPlonkVerifier`: to verify the zk proof (this contract was generated using snarkjs).

## Install dependencies

```bash
yarn install
```

## Run tests

```bash
npx hardhat test
```

When you run tests you will see something like this:

![RunTestsPlonk](https://user-images.githubusercontent.com/52170174/172546514-e47e6e3e-9db5-4d33-ae6d-1ffeb158e860.png)

## Deploy on [Sepolia](https://sepolia.etherscan.io/)

Create a `.env` file and add to it:

```text
PRIVATE_KEY=<yourPrivateKey>
```

where `yourPrivateKey` is the private key of your wallet.

To deploy on Sepolia run:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

## zkSudoku contracts graph
