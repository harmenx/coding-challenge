const groupArrayElements = (inputArray, arraySize) => {
    if(inputArray === undefined || inputArray === []){
        return [];
    }
    const result = [];
    let maxSize = Math.ceil(inputArray.length / arraySize);
    for(let i = 0; i < inputArray.length; i += maxSize){
        result.push(inputArray.slice(i, i + maxSize));
    }
    return result;
}

module.exports = groupArrayElements;