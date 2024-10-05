// var romanToInt = function (s) {
//   const symbol = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let sum = 0;
//   let current;
//   let next;
//   for (let i = 0; i < s.length; i++) {
//     current = symbol[s[i]];
//     next = symbol[s[i + 1]];

//     if(current && next < next){
//         sum -= current;
//     }
//     else{
//         sum += current;
//     }
//   }
//   return sum;
// };

// console.log(romanToInt("MCMXCIV"));

// Another approach

var romanToInt = function (s) {
  const symbol = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  let index = 0;

  while (index < s.length) {
     const current = symbol[s[index]];
     const next = symbol[s[index+1]];

     sum += current < next ? -current : current;
     index++;
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));


