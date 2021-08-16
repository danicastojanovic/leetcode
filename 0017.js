var letterCombinations = function(digits) {
    let combinations = [];
    if (digits.length === 0) {
      return combinations;
    }
    let backtrack = function(index, path) {
      if (path.length === digits.length) {
        combinations.push(path.toString());
        return;
      }
      let possibleLetters = numbersToLetters[digits[index]].split('');
      for (let letter of possibleLetters) {
        path = path.concat(letter);
        backtrack(index+1, path);
        path = path.slice(0, -1);
      }
    }

    backtrack(0, '');
    return combinations;
  };

  var numbersToLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

/*



*/