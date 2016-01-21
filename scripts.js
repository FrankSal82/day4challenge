//day 4 challenge
//capitalize the first letter of a word

var string = prompt("enter something?");
enter = capitalize(string);
console.log(enter);


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
