function sumFor(numList) {
  let sum = 0;
  for(let i = 0; i < numList.length; i++) {
    sum += numList[i];
  }
  return sum;
}

function sumWhile(numList) {
  let i = 0;
  let sum = 0;
  while(i < numList.length) {
    sum += numList[i];
    i++;
  }
  return sum;
}

function sumRecursion(numList) {
  let i = 0;
  let j = numList.length;
  return sumRecursionRecursive(numList, i, j);
}

function sumRecursionRecursive(numList, i, j) {
  if(i >= j) {
    return 0;
  }
  return sumRecursionRecursive(numList, i+1, j) + numList[i];
}

function sumTheSimpleWay(numList) {
  return _.reduce(numList, function(memo, num){return memo + num});
}

myNumList = [1,2,3,4,5];
console.log(sumFor(myNumList));
console.log(sumWhile(myNumList));
console.log(sumRecursion(myNumList));
console.log(sumTheSimpleWay(myNumList));