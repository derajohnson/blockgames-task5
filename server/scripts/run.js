const main = async () => {
    const stakingContractFactory = await hre.ethers.getContractFactory("Staking");
    const stakingContract = await stakingContractFactory.deploy();

    await stakingContract.deployed();

    console.log('contract addy: ', stakingContract.address);
    let contractBalance = await hre.ethers.provider.getBalance(
        stakingContract.address
      );
    console.log(
        "Contract balance:",
        hre.ethers.utils.formatEther(contractBalance)
      );

      const createStake = await stakingContract.createStake(10)
      await createStake.wait()


}

const runMain = async () => {
    try {
        await main();
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();