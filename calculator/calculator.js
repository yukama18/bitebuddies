async function splitCheck(cost, tipPercentage) {

    const split = cost / 2.0;
    const tipAmount = split * tipPercentage;
    const total = split + tipAmount;
    console.log("the cost per person is $" + split + " with a $" + tipAmount + " tip, which totals to $" + total);
  }


async function main2() {
    splitCheck(50.2, 0.20);
}
  
  // Call the main function
  main2();