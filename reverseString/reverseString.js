const reverseString = function(stringToReverse) {

    let reversedArray = stringToReverse.split("");
    reversedArray.reverse();
    reversedString = reversedArray.join("");
    return reversedString;


    
  //  for (let i=stringToReverse.length-1; i>=0; i--) {
    //    reversedString += stringToReverse[i];
    //}
    //return reversedString;
}

module.exports = reverseString


