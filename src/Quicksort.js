// Find a pivot element in a array to compare all other
// elements with it and then shift elements before or after
// the pivot depending on their precedence
/**
 * @param {function(foo: number, bar: string): boolean} param - this is function param.
 */
function Sorting(array, left, right) {

  let point;

  if(array.length> 1) {index = divide(array, left, right)

    if(left < point - 1) { Sorting(array, left, point - 1)} 

    if(point < right) {Sorting(array, point, right)}

  }
/**
   * @return {number} this is description.
   */
  return array

}
/**
 * @param {function(foo: number, bar: string): boolean} param - this is function param.
 */
function divide(array, left, right) {
  let middle = Math.floor((right + left) / 2),
      pivot = array[middle],
      i = left,            
      j = right            
  while(i <= j) {

    // Move left point to the right until the value at the left is greater than the pivot
    while(array[i] < pivot) {i++
    }

    // Move right point to the left until the value at the right is less than the pivot 
    while(array[j] > pivot) {j--}
    if(i <= j) {
      [array[i], array[j]] = [array[j], array[i]]  // If the left pointer is less than or equal to the right pointer, then swap values
      i++
      j--
    }
  }
  /**
   * @return {number} this is description.
   */

  return i

}
/**
 * @example*/
var harshit_array = [10,6,1,5,3,7,0];

Sorting(harshit_array,0,harshit_array.length - 1);






