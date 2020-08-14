
//Approach1 
// function caseInsensitivePalindrome(str) {
//   //convert to lowercase
//   //split str into array, reverse the elements in array, join the elements
  
//   let lowerCase = str.toLowerCase()
//   let case1 = lowerCase.split('')
//   let case2 = [...case1]   //created copy of case1 because reverse() method is destructive, meaning it changes the original 
//   let reversed = case2.reverse() 
//   let success = ''
//   let palindrome = []
   
//   for (let i=0; i<str.length; i++) {
//       if(case1[i] === reversed[i]){
//           palindrome.push(case1[i])    
//       }
//   }

//   if (case1.length === palindrome.length){
//       success = 'This is a palindrome'
//   } else{
//       success = 'This is not a palindrome'
//   }


//   return success
// }

// let result = caseInsensitivePalindrome('ABAC')
// console.log(result)

//Approach2 -> Using string and array methods 
// function caseInsensitivePalindrome(str) {
//     let lowerCase = str.toLowerCase()
//     let reversed = lowerCase.split('').reverse().join('')
//     //return lowerCase === reversed

//     let message = ''
//     if (lowerCase === reversed){
//         message = 'This is a palindrome'
//     }else{
//         message = 'This is not a palindrome'
//     }
//     return message
// }

// let result = caseInsensitivePalindrome('WOW')
// console.log(result)

//Approach3 -> Changing logic in for loop by starting i at end of word and building word in reverse 
// function caseInsensitivePalindrome(str) {
//     let lowerCase = str.toLowerCase()
//     let reversed = ''

//     for (let i = lowerCase.length-1; i>=0; i--) {  
//         reversed += lowerCase[i]
//     }

//     return lowerCase === reversed  //returns true or false
// }
// let result = caseInsensitivePalindrome('WOW')
// console.log(result)



//variable for count of nums
//loop thru array 
//multiply numbers


// function encloseInBrackets(str) {
//     return `(${str})`
// }

// let result = encloseInBrackets('Hi')
// console.log(result)


// function factorial(num) {
//     let sum = 1

//     for(let i=1; i<=num; i++) {
//         sum *=i
//     }
    
//     return sum
// }
// let result = factorial(5)
// console.log(result)

function firstDigit(str) {
    const strNums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const chars = str.split('')
   
   for (const char of chars){
       if(strNums.includes(char)) {
           return char
       }
     

}
}


let results = firstDigit('A2ffg2')
console.log(results)