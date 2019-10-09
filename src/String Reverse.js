/** Reversing a String Using looping
 * @param {function(foo: number, bar: string): boolean} param - this is function param.
 */
function StringReverse(data){
  let reverse="";
  for(var i = data.length-1; i>=0; i--){   // decrement back so that the words come in reverse order
  reverse = reverse + data[i];
  }
  /**
   * @return {number} this is description.
   */
  return reverse;
}

StringReverse("HARSHIT_MANDADA");