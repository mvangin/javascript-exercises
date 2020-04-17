const leapYears = function(possibleLeapYear) {
    if (possibleLeapYear % 4 == 0) {

        if (possibleLeapYear % 100 == 0 && possibleLeapYear % 400 !=0) {
            return false;
        } else {
            return true;
        }

    } else {
        return false;  
    }
      

}

module.exports = leapYears
