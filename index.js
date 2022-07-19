function receivesAFunction(cb, name) {
    return `${name}, ${cb()}`;
}

function stayAwake() {
    return "you need to stay awake!";
}

console.log(receivesAFunction(stayAwake, "Jeff"));

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hello");
    };
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("Howdy");
    };
}