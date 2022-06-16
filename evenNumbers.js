
//PRINTING EVEN NUMBERS
const even = ()=>{
    for(let i =0; i<=10000; i++){
       if(i%2===0){
        console.log(i);
       }
    }
}

even();

//ALTERNATIVE METHOD TO PRINT 10 EVEN NUMS

const arr = [0,1,2,3,4,5,6,7,8,9,10];


const evenNums = arr.filter((x)=>{
  return x%2===0;
});

console.log(evenNums);
