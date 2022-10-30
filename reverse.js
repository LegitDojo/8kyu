//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'








function solution(str){

let strToArray = str.split("");

let reverse = strToArray.reverse();

let commasOut = reverse.join("");

return commasOut;

}