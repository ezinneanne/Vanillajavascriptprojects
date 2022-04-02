
//Write a program that asks the user for a word until he types "stop". The program then shows each of these words, except "stop".

let word = ""
let sWord = "stop".toLowerCase()

while (word !== sWord ) {
  word = prompt("Enter a word: ")
}