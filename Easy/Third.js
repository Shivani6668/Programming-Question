// Check if an Array is SortedExample 1:
// Input: N = 5, array[] = {1,2,3,4,5}
// Output: True.
// Explanation: The given array is sorted i.e Every element in the array is smaller than or equals to its next values, So the answer is True.

function checkSorted(num){
 for(let i=0;i<num.length-1;i++){
    if(num[i] > num[i+1]){
        return false
    }
 }
 return true
}
console.log(checkSorted([1,2,3,4,5]))