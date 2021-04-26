// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const [owner, other] = await hre.ethers.getSigners();
  // We get the contract to deploy
  const ExampleToken = await hre.ethers.getContractFactory("ChaingeToken");
  const exampleToken = await ExampleToken.deploy("Hello", "World", 18, "90000000000000000000000000");

  await exampleToken.deployed();

  console.log("ChaingeToken deployed to:", exampleToken.address);

  const _maxTime = await exampleToken.MAX_TIME()

  const maxTime = parseInt(_maxTime._hex).toString()

  // console.log(maxTime);

  let now = parseInt( (Date.now() / 1000).toString())

  const amount = 190000000000000
  
  // await sleep()
  // await exampleToken.mintTimeSlice(owner.address, amount, now, maxTime);
  // await sleep()
  // await exampleToken.mintTimeSlice(owner.address, amount, now+20000, maxTime);
  // await sleep()
  // const _balance2 = await exampleToken.timeBalanceOf(owner.address, now+20000, maxTime);
  // const balance2 = parseInt(_balance2._hex)

  // console.log(balance2)

  // const slice = await exampleToken.sliceOf(owner.address);
  // console.log(slice);

  async function sleep() {
    return new Promise<void>(function(resv) {
        setTimeout(() => {
          resv()
        }, 0)
    })
  }
  
  // const _balance0 = await exampleToken.balanceOf(owner.address, now, maxTime);
  // const balance0 = parseInt(_balance0._hex)
  // if(amount != balance0) {
  //   console.log('错误:', amount, balance0)
  // }

  // console.log(balance0)



  await sleep()

  now = 10000;

  await exampleToken.mintTimeSlice(owner.address, 10, now, now+10);

  // await sleep()
  await exampleToken.mintTimeSlice(owner.address, 20, now+12, now+15);

  await sleep()
  await exampleToken.mintTimeSlice(owner.address, 30, now + 17, now + 20);

  await sleep()
  await exampleToken.mintTimeSlice(owner.address, 40, now + 19, now + 25);
  // console.log('s1')

  await sleep()

  const res = await exampleToken.sliceOf(owner.address);
  console.log('res', res)
  res[0].forEach(element => {
    console.log('slice', parseInt(element._hex))
  });

  // await exampleToken.clean(owner.address,  now, now + 15);


  // const res2 = await exampleToken.sliceOf(owner.address);
  // console.log('res2', res2)
  // res2[0].forEach(element => {
    // console.log('slice', parseInt(element._hex))
  // });
  // await exampleToken.clean(owner.address,  now + 17, now + 25);

  // console.log('s1')

  const balance = await exampleToken.timeBalanceOf(owner.address, now + 17, now + 19);
  console.log('17-19', parseInt(balance._hex));

  // const balance2 = await exampleToken.timeBalanceOf(owner.address, now, now + 999999919);
  // console.log('all', parseInt(balance2._hex));
  const balance2 = await exampleToken.timeBalanceOf(owner.address, now+19, now + 20);
  console.log('19-20', parseInt(balance2._hex));
  const balance3 = await exampleToken.timeBalanceOf(owner.address, now+20, now + 25);
  console.log('20-25', parseInt(balance3._hex));
  // await sleep()
  // await exampleToken.transferFrom(owner.address, '0xcd3b766ccdd6ae721141f452c550ca635964ce71', 100000); 
  // await sleep()
  // const balance2 = await exampleToken.balanceOf(owner.address);
  // console.log('b2',parseInt(balance2._hex));

  // await sleep()
  // await exampleToken.timeSliceTransferFrom(owner.address, "0xcd3b766ccdd6ae721141f452c550ca635964ce71", 1000, now, now + 1000000000)

  // await sleep()

  // await exampleToken.timeSliceTransferFrom(owner.address, "0xcd3b766ccdd6ae721141f452c550ca635964ce71", 1000, now + 1000000000, now + 1000000001)

  // await sleep()
  // await exampleToken.timeSliceTransferFrom(owner.address, "0xcd3b766ccdd6ae721141f452c550ca635964ce71", 1000, now + 1000000001, now + 1000000002)

  // await sleep()
  // await exampleToken.timeSliceTransferFrom(owner.address, "0xcd3b766ccdd6ae721141f452c550ca635964ce71", 1000, now+ 1000000002, now + 1000000003)

  // await sleep()

  // const balance3 = await exampleToken.balanceOf(owner.address);
  // console.log('b3',parseInt(balance3._hex));

  // const balance4 = await exampleToken.timeBalanceOf(owner.address, now, now + 1000000000);
  // console.log('b4',parseInt(balance4._hex));

  // const balance5 = await exampleToken.timeBalanceOf('0xcd3b766ccdd6ae721141f452c550ca635964ce71', now, now + 1000000000);
  // console.log('b5',parseInt(balance5._hex));


  // await exampleToken.clean(owner.address, now,  now + 1000000003);

  // const _balance2 = await exampleToken.balanceOf(owner.address, now, now + 100);
  // const balance2 = parseInt(_balance2._hex)
  // if(amount-1000 != balance2) {
  //   console.log('错误:1', amount, balance2)
  // }
  
  // const _balance3 = await exampleToken.balanceOf(owner.address, now + 100, maxTime);
  // const balance3 = parseInt(_balance3._hex)

  // console.log("balance2", balance2);
  // console.log("balance3", balance3);

  // await exampleToken.burn(owner.address, amount, now, maxTime);
  // const _balance1 = await exampleToken.balanceOfFor(owner.address)

  // const balance1 = parseInt(_balance1._hex)
  // if(0 != balance1) {
  //   console.log('错误:', amount, balance1)
  // }
  // console.log(balance1)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

  