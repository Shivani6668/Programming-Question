// Find Second Smallest and Second Largest Element in an array
// Example 1:
// Input: [1,2,4,7,7,5]
// Output: Second Smallest : 2
// 	Second Largest : 5
// Explanation: The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input: [1]
// Output: Second Smallest : -1
// 	Second Largest : -1
// Explanation: Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.


function find(num){
let smallest = Infinity
    let secondSmallest = Infinity
let largest = -Infinity
let secondlargest = -Infinity

for(let x of num){
    if(smallest > x){
        secondSmallest = smallest
        smallest = x
    } else if((x < secondSmallest) && (x !== smallest)){
        secondSmallest = x
    }

    if(largest < x){
        secondlargest = largest
        largest = x
    } else if((x > secondlargest) && (x !==largest)){
        secondlargest = x
    }
}

return [secondSmallest,secondlargest]

}
console.log(find([1,2,4,7,7,5]))