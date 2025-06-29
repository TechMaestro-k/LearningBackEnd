function sumOfSomething(a,b,callbackFn){
    let square1=square(a);
    let square2=square(b);
    return square1+square2;
}

let ans=sumOfSomething(2,3,square);
console.log(ans);
function square(x){
    return x*x;
}