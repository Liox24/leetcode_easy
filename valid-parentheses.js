var isvalid = function (s) {
  if (s.length <= 1 || s.length % 2 !== 0) return false;

  let stack = [];
  let map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let index = 0; index < s.length; index++) {
    let char = s[index];

    if (map[char]) {
      stack.push(char);
    } else {
      let last = stack.pop();
      if (map[last] !== char) {
        return false;
      }
    }
  }

  //   if (s.length % 2 !== 0 || s.length <= 1) return false;

  return stack.length === 0;
};

// console.log(isValidParentheses("()")); // true
console.time("isvalid"); // for check time complexity
console.log(isvalid("()[]{}")); // true
console.timeEnd("isvalid");
// console.log(isValidParentheses("(]")); // false
// console.log(isValidParentheses("([)]")); // false
// console.log(isValidParentheses("{[]}"));
