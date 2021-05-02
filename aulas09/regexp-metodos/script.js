const regexp = /\w+/gi;
const frase = "JavaScript e Java Linguagem 101"
// console.log(frase.replace(regexp, "X"))


console.log(regexp.exec(frase))
console.log(frase.match(regexp))

const sep = /\w +/g;
console.log(frase.split(sep))
