//day 4 challenge
//capitalize the first letter of a word

var string = prompt("Enter something and I will capitalize the first letter");
enter = capitalize(string);
console.log(enter);
alert(enter);


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
