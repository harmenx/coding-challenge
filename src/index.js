const groupArrayElements = (inputArray, arraySize) => {
    if(inputArray === undefined || inputArray === [] || inputArray === null){
        return [];
    }
    if(typeof arraySize !== 'number' || typeof inputArray !== 'object'){
      return [];
    }
    if(arraySize > inputArray.length && inputArray.length > 0){
        return [inputArray];
    }
    const result = [];
    let maxSize = Math.ceil(inputArray.length / arraySize);
    for(let i = 0; i < inputArray.length; i += maxSize){
        result.push(inputArray.slice(i, i + maxSize));
    }
    return result;
}

module.exports = groupArrayElements;