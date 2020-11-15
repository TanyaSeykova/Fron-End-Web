
//1

let A = [10, 5, 13, 18, 51];
A.forEach(function(item) {
    console.log(item);
  });


//2
let B = [];
A.forEach(function(item) {
    B.push(item*2);
  });

B.forEach(function(item) {
    console.log(item);
  });


//3
let filteredA = filterA();

function filterA(){
    let innerArr = [];
    A.forEach(function(item) {
        if (item%2 == 0) innerArr.push(item);
      });
    return innerArr;
}

filteredA.forEach(function(item) {
    console.log(item);
  });


//4

function smallerThan10(arr){
    
    let exists = false;
    arr.forEach(function(item) {
        if (item < 10) exists = true;
      });
    return exists;
}

console.log(smallerThan10(A));
console.log(smallerThan10(B));

//5

let filteredA3 = filter3(A);
function filter3(arr){
    
    let innerArr3 = [];
    arr.forEach(function(item) {
        if (item % 3 == 0) innerArr3.push(item);
      });
    return innerArr3;
}

filteredA3.forEach(function(item) {
    console.log(item);
  });


//6
reducer = (acc, currVal) => acc+currVal;
let sum = A.reduce(reducer);
console.log(sum);

//7
let sliced = A.slice(3,5);
sliced.forEach(function(item){

    console.log(item);
})