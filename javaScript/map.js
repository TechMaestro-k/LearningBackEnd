const input=[1,2,3,4,5];

function transform(i){
    return i*2;
}

const ans=input.map(transform);
console.log(ans);


//filtering

const ans1=input.filter(function(n){
    if(n%2==0) return true;
    else return false;
});

console.log(ans1);