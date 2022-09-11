let challenge = require("./ejercicio_1");
const readline = require("readline");

interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface.question("put the text: ", function (text) {
  console.log(text);
  challenge.reverseByParenthesis(text);

  interface.close();
});
