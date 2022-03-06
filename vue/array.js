import { ARR_METHODS } from "./config";
import { observeArr } from "./observeArr";

var originArrMethods = Array.prototype,
    arrMethods = Object.create(originArrMethods);

ARR_METHODS.map(function(m) {
  arrMethods[m] = function() {
    var args = Array.prototype.slice.call(arguments),
    rt = originArrMethods[m].apply(this, args);

    var newArr;

    switch(m) {
      case "push":
        break;
      case "unshift":
        newArr = args;
        break;
      case "splice":
        newArr = args.slice(2);
        break;
      default:
        break;
    }
    newArr && observeArr(newArr);
    return rt;
  };
})

export {
  arrMethods,
}