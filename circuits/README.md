# zkGames circom circuits

This folder contains the `sudoku.circom` [circuit](https://github.com/iden3/circom) used in the zkSudoku application.

## Install dependencies

To install all the dependencies run:

```bash
yarn install
```

## Compile circuits and generate and verify the zk-proof using [snarkjs](https://github.com/iden3/snarkjs)

To know how is everything generated, you can see the `executePlonk.sh` file inside the `sudoku` folder.

To compile and run the circuit, go inside the sudoku folder and run:

Run the first time:

```bash
chmod u+x executePlonk.sh
```

And after that, you can always run:

```bash
./executePlonk.sh
```

## Run tests

```bash
yarn test
```

When you run tests you will see something like this:

![CircuitsTestPlonk](https://user-images.githubusercontent.com/52170174/172547848-e0006250-bcde-4bb3-9f48-68053a7b1387.png)
