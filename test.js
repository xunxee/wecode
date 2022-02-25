let x = 10;

function test(num) {
  if (x % 2 == 0) {
    // console.log(`짝수`);
    return ["짝수"];
  } else {
    // console.log(`홀수`);
    return ["홀수"];
  }
}

console.log(test(x));
