module.exports.reverseByParenthesis = function reverseByParenthesis(text) {
  const indexes = getIndexesParenthesis(text);

  if (!indexes) {
    return text;
  }

  const { startParenthesisIndex, endParenthesisIndex } = indexes;
  const newText = deleteParenthesisAndReverseText(
    parseInt(startParenthesisIndex),
    parseInt(endParenthesisIndex),
    text
  );

  console.log(newText);

  return reverseByParenthesis(newText);
};

function getIndexesParenthesis(text) {
  let startParenthesisIndex;
  let endParenthesisIndex;

  const characters = text.split("");

  for (indexCharacter in characters) {
    const parenthesis = characters[indexCharacter];

    if (parenthesis === "(") {
      startParenthesisIndex = indexCharacter;
    }
    if (parenthesis === ")") {
      endParenthesisIndex = indexCharacter;
      break;
    }
  }

  if (
    startParenthesisIndex === undefined ||
    endParenthesisIndex === undefined
  ) {
    return null;
  }

  return { startParenthesisIndex, endParenthesisIndex };
}

function deleteParenthesisAndReverseText(
  startParenthesisIndex,
  endParenthesisIndex,
  text
) {
  const initialText = text.substring(0, startParenthesisIndex);
  const textBetweenParenthesis = text.substring(
    startParenthesisIndex + 1,
    endParenthesisIndex
  );
  const finalText = text.substring(endParenthesisIndex + 1);

  return initialText + reverseText(textBetweenParenthesis) + finalText;
}

function reverseText(text) {
  return text.split("").reverse().join("");
}
