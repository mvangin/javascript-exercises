const repeatString = function(wordInput, numberOfRepeats) {
    let repeatWord = "";

    for  (let i=0; i < numberOfRepeats; i++) {
        repeatWord += wordInput;
    }
    if (numberOfRepeats < 0) {
        return "ERROR";
        } else {
    return repeatWord;
    }
}

module.exports = repeatString
