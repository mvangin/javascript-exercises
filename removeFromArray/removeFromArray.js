const removeFromArray = function(array, ...Args) {
    trimArray = [];
    array.forEach((item) => {
        if (!Args.includes(item)) {
            trimArray.push(item);
        }
    });

   return trimArray; 
}


module.exports = removeFromArray
