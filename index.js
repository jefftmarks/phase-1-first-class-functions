function receivesAFunction(cb, name) {
    return cb(name);
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