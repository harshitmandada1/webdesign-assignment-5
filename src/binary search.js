//binary search
/**
 *
 * @external {XMLHttpRequest} https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest
 *
 * @param {number[]} param - this is array param.
 */
function Searching_using_binarySearch(num, array) {
    let f = 0;    //left endpoint
    let l = array.length - 1;   //right endpoint
    let p = -1;
    let found = false;
    let m;
 
    while (found == false && f <= l) {
        m = Math.floor((f + l)/2);
        if (array[m] == num) {
            found = true;
            p = m;
        } else if (array[m] > num) {  //Checking  lower half
            l = m - 1;
        } else {  //checking upper half
            f = m + 1;
        }
    }
    if (found = true && p > 0){
      console.log("Number found at Location:");
    }
    else{
      console.log("Number not found");

    }
    
    /**
   * @return {number} this is description.
   */
    return p;
}

Searching_using_binarySearch(9,[1,2,4,6,7,8,10]);
Searching_using_binarySearch(8,[1,2,4,6,7,8,10]);
