// Find the Largest element in an array
// Example 1:
// Input: arr[] = {2,5,1,3,0};
// Output: 5
// Explanation: 5 is the largest element in the array. 

// Example2: 
// Input: arr[] = {8,10,5,7,9};
// Output: 10
// Explanation: 10 is the largest element in the array. 

// Solution:- 1
function findLargest(num){
let max = -Infinity
for(let x of num){
   if(max < x){
    max = x
   }    
} 
return max
}
console.log(findLargest([2,5,1,4,0]))



// Solution:- 2

function findLargest(num){
return num.reduce((acc,curr)=>{
    return acc < curr ? curr : acc
},-Infinity)
}
console.log(findLargest([2,5,1,4,0]))


