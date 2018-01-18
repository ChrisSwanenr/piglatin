$(document).ready(function() {
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var userInput = $("#inputText").val();
    var inputWordsArray = userInput.split(" ");
    var storeTranslatedWords = []
    inputWordsArray.forEach(function(currentWord) {
      var currentArray = currentWord.split("");
      var translateCurrentWord = wordTranslate(currentArray);
      storeTranslatedWords.push(translateCurrentWord);
    });
    var result = storeTranslatedWords.join(" ");
    $("#translatedPhrase").text(result);
  });


});

var wordTranslate = function(inputArray) {
  var resultArray = []
  var resultArray2 = []
  if (/[aeiou]/i.test(inputArray[0])) {
    resultArray = inputArray;
    resultArray.push("way");
    return resultArray.join("");
  } else if ((inputArray[0]==="q") && (inputArray[1]==="u")) {
    resultArray = inputArray.slice(2);
    resultArray.push("quay");
    return resultArray.join("");
  } else {
    if (!(/[aeiou]/i.test(inputArray[1])) && !(/[aeiou]/i.test(inputArray[2]))) {
      resultArray = inputArray.slice(3);
      resultArray2 = resultArray.concat(inputArray.slice(0,3));
      resultArray2.push("ay");
      return resultArray2.join("");
    } else if (!(/[aeiou]/i.test(inputArray[1]))) {
      resultArray = inputArray.slice(2);
      resultArray2 = resultArray.concat(inputArray.slice(0,2));
      resultArray2.push("ay");
      console.log(resultArray2);
      return resultArray2.join("");
    } else {
      resultArray = inputArray.slice(1);
      resultArray2 = resultArray.concat(inputArray.slice(0,1));
      resultArray2.push("ay");
      return resultArray2.join("");
    }
  }
}
