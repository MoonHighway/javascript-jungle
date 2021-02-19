let name = argval("name");
let age = parseInt(argval("age"));

let ageCheckString =
  age > 25
    ? `${age - 25} years older than`
    : age < 25
    ? `${25 - age} years younger than`
    : `the same age as`;

console.log(`${name} is ${ageCheckString} JavaScript!`);

function argval(flag) {
  let valueIndex = process.argv.indexOf(`--${flag}`) + 1;
  return process.argv[valueIndex];
}
