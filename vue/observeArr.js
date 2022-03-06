import observe from './observe';

console.log("observe--------", observe);

export function observeArr (arr) {
  for (var i=0; i<arr.length; i++) {
    observe(arr[i]);
  }
}