var isMomHappy = true;

// create our Promise
var willIGetNewPhone = new Promise(function(resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: 'Apple',
      model: 'iPhone',
      color: 'black'
    };
    resolve(phone);
  } else {
    var reason = Error('Mom is not happy');
    reject(reason);
  }
});

// call our Promise
var askMom = function() {
  console.log('Before asking mom');
  willIGetNewPhone
    .then(function(fulfilled) {
      console.log(fulfilled);
    })
    .catch(function(error) {
      console.log(error.message);
    });
  console.log('After asking mom');
};

askMom();
