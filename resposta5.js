var string ="Palavra";
var stringArray = string.split('');
var newString = "";
for (var i = stringArray.length - 1; i >= 0; i--) {
    newString += stringArray[i];
}
console.log(newString);