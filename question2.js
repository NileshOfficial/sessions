//2. Find the possible combinations of a string and store them in a MAP?

function jumble(str) {
    if (str.length < 2) return str;
  
    let permutations = [];

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
  
      if (str.indexOf(char) != i)
        continue;
  
      let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);
  
      for (let subPermutation of jumble(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
  }

console.log(jumble("apple"));