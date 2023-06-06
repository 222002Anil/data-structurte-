//answer1 
function searchNumber(arr, num) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result.push(i);
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    return -1;
  }
}
const arr = [1, 3, 5, 7, 3, 9];
const num = 3;
const result = searchNumber(arr, num);
console.log(result);

//answer 2
for (let i = 5; i >= 1; i--) {
  let row = '';
  for (let j = i; j >= 1; j--) {
    row += j;
  }
  console.log(row);
}

//answer 3
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

arr.sort((a, b) => a - b);

console.log(arr);

//answer 4
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let char of str1) {
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

const str1 = 'HELLO';
const str2 = 'ELLOH';

if (areAnagrams(str1, str2)) {
  console.log('True');
} else {
  console.log('False');
}

//answer 5
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

const str = 'Hello';
const reversedStr = reverseString(str);

console.log(reversedStr);
