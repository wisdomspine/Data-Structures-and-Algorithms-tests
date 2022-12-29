/**
 * returns a function that multiply parameters of subsequent calls
 * instance
 * multiply(1)() returns 1
 * multiply(4)(3) returns 4*3 = 12
 * multiply(3)(9)(30) return 3*9*30 = 810
 * 
 * SOLUTION
 * multiply(term)
 *  return anonymous_function (term2):
 *    if(term2 is passed in):
 *      return multiply(term * term2)
 *    else return term
 */
function multiply(term?:number){
// this will only be executed if the first call is made with undefined
term = term??1;
return (secondTerm?: number) => {
  if(secondTerm == undefined) return term;
  return  multiply((term as number) * secondTerm)
} 
}

console.log(multiply(4)(4)())