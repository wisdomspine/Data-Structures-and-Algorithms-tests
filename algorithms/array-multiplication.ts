/**
 * TODO: Write a function that takes as input an array and returns a function that can be called with
 * a valid index.
 * The returned function should return the product of the number in the passed index, and all numbers in index
 * less than the specified index
 * @example
 * const multiplier = arrayMultiplier([3, 4, 5, 8, 9, 4])
 * console.log(multiplier(0)) // logs 3 = 3
 * console.log(multiplier(4)) // logs 4320 == 3*4*5*8*9
 * console.log(multiplier(20)) // logs 17280 == 3*4*5*8*9*4
 * console.log(multiplier(-1)) // logs 1
 *
 * Solution
 * keep tracked of multiplied index
 * return multiplier function
 * when multiplier function is called with an index less than 0 return 1
 * when multiplier is called with an index greater than the maximum index, return multiplication on the largest index instead
 * when multiplier is called with a valid index, do the following
 *  create a stack as stack
 *  set counter to index
 *  while counter >= 0 and counter not in tracked
 *    push counter to stack
 *    decrease counter by 1
 *  set product to 1
 *  while stack is not empty
 *    pop stack as counter
 *    set acc to array at counter multiplied by acc
 *    set tracked of counter to acc
 *  return tracked of counter
 *
 *
 */

export function arrayMultiplier(array: number[]): (index: number) => number {
  // keep track of multiplied indices to help with subsequent calls
  const trackedCalls:Map<number, number> = new Map();

  return (index:number){
    let product: number = 1;
    if(index > (array.length - 1)){
      index = array.length -1;
    }
    if(index < 0){
      return product;
    }

    let counter:number = 0;
    const stack:number[] = [];

    while(!trackedCalls.has(counter) && (counter >= 0) ){
      stack.push(counter);
    }

    // there was call made for the current value of counter before
    if(counter >= 0){
      product = trackedCalls[counter];
    }

    while(stack.length != 0){
      counter = stack.pop();
      product *= array[counter];
      trackedCalls[counter] = product;
    }

    return trackedCalls[counter];
  }
}
