const TEMP = 85;

const willIGetIceCream = new Promise(
  (resolve, reject) => {
    if (TEMP > 80) {
      const iceCreamYes = 'YES, we get ice cream! :)';
      resolve(iceCreamYes);
    } else {
      const iceCreamNo = Error('NO ice cream today :(');
      reject(iceCreamNo);
    }
  }
);

const tellMyFriends = (yesOrNo) => {
  console.log('CAN HAZ:', yesOrNo);
  const message = '*** EVERYONE: Let\'s get ice cream!';
  return Promise.resolve(message);
};

// call the promise
const hotEnoughForIceCream = () => {
  willIGetIceCream
    .then(tellMyFriends)
    .then(finalMessage => { console.log(finalMessage); })
    .catch(error => console.log(error.message));
};

hotEnoughForIceCream();
