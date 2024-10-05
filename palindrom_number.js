// var palindrome = function(x){
//     x = String(x);
//     return x == x.split('').reverse().join('');
// }

// console.log(palindrome(String(0)));

// Without converting integer to string

var palindrom = function (x) {
  if (x < 0) {
    return false;
  }
  let reversed = 0;

  let temp = x;

  while (temp != 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }

  return reversed == x;
};

console.log(palindrom(-121));
