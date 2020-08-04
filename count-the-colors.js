/**
 * This is the initiating function, which will be called by default with the colors array initiated
 */
function driverFunction() {
    const colors = ['red',
        'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
        'green', 'green', 'red', 'green', 'blue']

    const highestCount = highestColorCount(colors)
    console.log(highestCount)
}

/**
 * this function will return the count of the highest color count with name
 * @param colors
 * @returns {{}}
 */
function highestColorCount(colors) {
    const colorCollection = {};
    colors.forEach(color => {
        if (Object.keys(colorCollection).includes(color)) {
            colorCollection[color] += 1
        } else {
            colorCollection[color] = 1
        }
    });

    /**
     * By closure the colorCollection object will be available for the inner function
     * @returns {{}}
     */
    function getTheHighestOfTheCount() {
        const sortedColorsCollection = Object.keys(colorCollection).sort(function (a, b) {
            return colorCollection[a] - colorCollection[b]
        })
        const toReturn = {}
        const key = sortedColorsCollection[sortedColorsCollection.length - 1]
        toReturn[key] = colorCollection[key];
        return toReturn;
    }

    return getTheHighestOfTheCount();
}


driverFunction();
