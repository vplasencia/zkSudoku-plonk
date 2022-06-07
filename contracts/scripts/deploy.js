const main = async () => {
  const SudokuPlonkVerifier = await hre.ethers.getContractFactory(
    "SudokuPlonkVerifier"
  );
  const sudokuPlonkVerifier = await SudokuPlonkVerifier.deploy();
  await sudokuPlonkVerifier.deployed();
  console.log(
    "SudokuPlonkVerifier Contract deployed to:",
    sudokuPlonkVerifier.address
  );

  const Sudoku = await hre.ethers.getContractFactory("Sudoku");
  const sudoku = await Sudoku.deploy(sudokuPlonkVerifier.address);
  await sudoku.deployed();
  console.log("Sudoku Contract deployed to:", sudoku.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
