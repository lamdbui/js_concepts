// Experimenting with Promises to check volatility of data at key points

var volatileArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('1) array initial value:', volatileArray);

var doubleArrayItemsPromise = new Promise(resolve => {
  console.log("*** The code passed to a Promise executes right away ***");
  // using setTimeout to simulate a async delay of 5 seconds
  setTimeout(() => {
    for (let i = 0; i < volatileArray.length; i++) {
      volatileArray[i] *= 2;
    }
    resolve('promise updated the array');
  }, 5000);
});

var runDoubleArrayItemPromise = () => {
  doubleArrayItemsPromise
    .then(resolvedMessage => {
      console.log(resolvedMessage);
      console.log('2) array in the resolve callback:', volatileArray);
    });
};

console.log('3) array before promise call:', volatileArray);
runDoubleArrayItemPromise();
console.log('4) array at the very end:', volatileArray);
