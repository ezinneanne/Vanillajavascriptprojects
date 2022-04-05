//Write a program that asks you for a word then shows its length, lowercase and uppercase values.
let word = prompt("Enter a word: ")
/*alert(word.length)
alert(word.toLowerCase())
alert(word.toUpperCase())*/

//Improve the previous program so that it also shows the number of vowels inside the word.

let vowel = ['a','e','i','o','u']
let words = word.split('')
let count = 0

for (word of words) {
  for (vow of vowel) {
    if (word === vow) {
      count++
    }
  }
}
console.log(`There are ${count} number of vowels in the word`)

//Improve the previous program so that it shows the word written backwards.
let reverseWord = words.reverse()
console.log(reverseWord)

//Improve the previousprogram to check if the word is a palindrome. A palindrome is a word or sentence that’s spelled the same way both forward and backward, ignoring punctuation, case, and spacing. Punctuation and spacing may not be taken into account here.
//"radar" should be detected as a palindrome, "Radar" too.
