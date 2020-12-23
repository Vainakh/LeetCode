const plurolized = (...args) => {
  const plurolized_nouns = [];
  args.forEach((noun) => {
      if (["s", "x", "z"].includes(noun.substr(-1))) {
           plurolized_nouns.push(noun + "es");
      } else if (["ss", "sh", "ch"].includes(noun.substr(-2))) {
           plurolized_nouns.push(noun + "es");
      } else {
          plurolized_nouns.push(noun + "s");
      } 
  });
  return plurolized_nouns;
}

console.log(plurolized("buzz"));
// console.log(plurolized(1, 2, 3, 4));
console.log(plurolized("one", "two", "three", "four"));
console.log(plurolized("bus", "platypus", "string", "length"));
// console.log(plurolized(true, false))