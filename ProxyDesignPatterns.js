// The Proxy design pattern acts as a substitute or placeholder for another object. It controls access to the original object, allowing you to add extra behavior or restrict access as needed without changing the object's code.

// In simpler terms, it's like having a secretary handling calls for a busy executive. The secretary can filter calls, provide additional information, or even block calls based on certain criteria before they reach the executive.

// Proxy pattern is used to:

// Control access to the original object: Proxy can check permissions or perform logging before allowing access to the real object.
// Lazy initialization: Proxy can delay the creation of expensive objects until they're actually needed.
// Add additional functionality: Proxy can provide caching, validation, or error handling without changing the original object's code.
// Remote proxy: Proxy can act as a local representative for an object in a different address space, like handling remote method invocations in distributed systems.
// In essence, the Proxy pattern adds a layer of indirection to control access and provide additional features without modifying the original object's behavior.



// External API Service

function CrytocurrencyAPI() {
  this.getValue = function (coin) {
    console.log("Calling External API... ")
    switch (coin) {
      case "Bitcoin":
        return "$3,500";
        break;
      case "Litecoin":
        return `$158`;
        break;
      case "Ethereum":
        return "$175";
        break;
    }
  };
}

//  const api = new CrytocurrencyAPI()

//  console.log(api.getValue('Bitcoin'))
//  console.log(api.getValue('Ethereum'))
//  console.log(api.getValue('Litecoin'))

function CrytocurrencyProxy() {
  this.api = new CrytocurrencyAPI();
  this.cache = {};

  this.getValue = function (coin) {
    if (this.cache[coin] == null) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  };
}

const proxy = new CrytocurrencyProxy();

console.log(proxy.getValue("Bitcoin"));
console.log(proxy.getValue("Ethereum"));
