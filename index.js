function receivesAFunction (callback){
    console.log(callback());
}

function returnsANamedFunction(){
   return returnsANamedFunction;
}

function returnsAnAnonymousFunction() {
    return function () {
        return "";
    };
}
