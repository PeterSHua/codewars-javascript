/*
slice
input: array, begin, end
output: new array with input elements from begin...end
*/

let slice = (array, begin, end) => {
  let result = [];

  let lastIdx = array.length - 1

  if (begin > lastIdx)
    begin = lastIdx + 1;

  if (end > lastIdx)
    end = lastIdx + 1;

  for (let idx = begin; idx < end; idx += 1) {
    result.push(array[idx]);
  }

  return result;
};

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

/*
splice
input: array, start, deleteCount, ...addElems

lastIdx = array.length - 1

if start > lastIdx
  start = lastIdx

maxDeleteCount = array.length - start

if deleteCount > maxDeleteCount
  deleteCount = maxDeleteCount

- remove deleteCount elements from start
- add addEles at start
- return new array with deleted elems
- return empty array if no elems deleted
- mutates array
*/

let splice = (array, start, deleteCount, ...addElems) => {
  let lastIdx = array.length - 1;

  if (start > lastIdx) {
    start = lastIdx;
  }

  let maxDeleteCount = array.length - start;

  if (deleteCount > maxDeleteCount) {
    deleteCount = maxDeleteCount;
  }

  front = slice(array, 0, start);
  deleted = slice(array, start, start + deleteCount);
  back = slice(array, start + deleteCount, array.length);

  result = front;
  resultLength = result.length;

  for (let idx = 0; idx < addElems; idx += 1) {
    result[resultLength + idx] = addElems[idx];
  }

  result = result.concat(back);

  array.length = result.length;

  for (let idx = 0; idx < result.length - 1; idx += 1) {
    array[idx] = result[idx];
  }

  return deleted;
};


// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]
