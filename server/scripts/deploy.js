const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const accountBalance = await deployer.getBalance();
    
    console.log("deploying contracts with account ", deployer.address);
    console.log("account balance ", accountBalance.toString());
    
    const stakingContractFactory = await hre.ethers.getContractFactory("Staking");
    const stakingContract = await stakingContractFactory.deploy();
    
    await stakingContract.deployed();
    
    console.log("Staking contract address: ", stakingContract.address)
    
    }
    
    const runMain = async () => {
        try {
            await main();
            process.exit(0)
        } catch (error) {
            console.log(error);
            process.exit(1)
        }
    }
    
    runMain();