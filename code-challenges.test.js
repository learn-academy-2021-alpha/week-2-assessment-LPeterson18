// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

//Pseudocode
//create a function
//argument is a number
//using if statements check modulo 3 is !== to zero
// return number is divisible by three
//else if modulo 3 is === zero
//return number is divisible by three


// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"

describe("When divisibleByThree is called", () => {
  it("return `15 is divisible by three` when 15 called is divisible by three",() => {
    //arrange
    const argument = num1
    //act
    const actualResult = divisibleByThree(argument)
    //assert
  expect(actualResult).toEqual(`${argument} is divisible by three`)
})
  it("return `0 is divisible by three` when 0 is called",() => {
    //arrange
    const argument = num2
    //act
    const actualResult = divisibleByThree(argument)
    //assert
  expect(actualResult).toEqual(`${argument} is divisible by three`)
  })
  it("return `-7 is not divisible by three` when -7 called is not divisible by three",() => {
    //arrange
    const argument = num3
    //act
    const actualResult = divisibleByThree(argument)
    //assert
  expect(actualResult).toEqual(`${argument} is not divisible by three`)
  })
})

// b) Create the function that makes the test pass.

const divisibleByThree = (number) => {
  if(number % 3 !== 0){
    return `${number} is not divisible by three`
  } else if(number % 3 === 0){
    return `${number} is divisible by three`
  }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//Pseudocode
//create a function
//argument is an array of words
//.map of array to alter every element in array
//extract element of array
//.split string into array of letters
//.toUpperCase first letter of new array
//.join letters back into string
//return element to array

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe("When capitalizeArray is called", () => {
  it(`return ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]`,() => {
    //arrange
    const argument = randomNouns1
    //act
    const actualResult = capitalizeArray(argument)
    //assert
  expect(actualResult).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
})
  it(`return ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]`,() => {
    //arrange
    const argument = randomNouns2
    //act
    const actualResult = capitalizeArray(argument)
    //assert
  expect(actualResult).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})


// b) Create the function that makes the test pass.

const capitalizeArray = (array) => {
  return array.map(string => {
    let stringLetters = string.split("")
    stringLetters[0] = stringLetters[0].toUpperCase()
    return stringLetters.join("")
  })
}



// --------------------3) Create a function that takes in an array of mixed data types and returns an array with ONLY NUMBERS sorted from least to greatest.

//PseudoCode
//create a function
//argument is an array
//set variable equal to .filter of array
//.filter array with if else inside
//if typeOf is number
//return value
//use .sort to sort numbers from least to greatest


// a) Create a test with expect statements for each of the variables provided.

var mixedDataArray1 = [true, 8, "hello", -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 107]

var mixedDataArray2 = [3, "yo!", 94, -9, false, 0, 18, "hola!"]
// Expected output: [-9, 0, 3, 18, 94]

describe("When numberSorter is called", () => {
  it("return [-8, 0, 8, 46, 59, 107] when mixedDataArray1 is called",() => {
    //arrange
    const argument = mixedDataArray1
    //act
    const actualResult = numberSorter(argument)
    //assert
  expect(actualResult).toEqual([-8, 0, 8, 46, 59, 107])
})
  it("return [-9, 0, 3, 18, 94] when mixedDataArray2 is called",() => {
    //arrange
    const argument = mixedDataArray2
    //act
    const actualResult = numberSorter(argument)
    //assert
  expect(actualResult).toEqual([-9, 0, 3, 18, 94])
  })
})



// b) Create the function that makes the test pass.

const numberSorter = (array) => {
  return array.filter(value => {
    return typeof value === "number"
  }).sort((a, b) => a-b)
//In order to sort correctly have to use the function keyword to define a function within .sort.  This allows for
}



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.


//Pseudocode
//create a function
//argument is a string
//let variable equal string.split into array
// while loop runs for length of string to check each letter if value === set of vowels
//if it does return index of first vowel and end while loop
//else increment i

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe("When vowelIndexFinder is called", () => {
  it("return 1 if learn is called",() => {
    //arrange
    const argument = vowelTester1
    //act
    const actualResult = vowelIndexFinder(argument)
    //assert
  expect(actualResult).toEqual(1)
})
  it("return 0 if academy is called",() => {
    //arrange
    const argument = vowelTester2
    //act
    const actualResult = vowelIndexFinder(argument)
    //assert
  expect(actualResult).toEqual(0)
  })
  it("return 2 if challenge is called",() => {
    //arrange
    const argument = vowelTester3
    //act
    const actualResult = vowelIndexFinder(argument)
    //assert
  expect(actualResult).toEqual(2)
  })
})

// b) Create the function that makes the test pass.

const vowelIndexFinder = (string) => {
  var i = 0;
  var vowelIndex
  var letterArray = string.split("")
  while (i < letterArray.length) {
    if(letterArray[i] === "a" || letterArray[i] === "e" || letterArray[i] === "i" || letterArray[i] === "o" || letterArray[i] === "u"){
      vowelIndex = i
      i = letterArray.length
    } else{
      i++
    }
  } return vowelIndex
}
