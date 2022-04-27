function handleInput(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
}

function myEach(collection, callback) {
    const newCollection = handleInput(collection);
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection = handleInput(collection);
    const newArray = [];
    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }
    return newArray;
}

function myReduce(collection, callback, acc) {
    let newCollection = handleInput(collection);
    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc;
}

function myFind(collection, predicate) {
    const newCollection = handleInput(collection);
    for (let i = 0; i < collection.length; i++) {
        if (predicate(newCollection[i]))
            return newCollection[i]
    }
    return undefined
}

function myFilter(collection, predicate) {
    const newCollection = handleInput(collection);
    const newArray = [];
    for (let i = 0; i < collection.length; i++) {
        if (predicate(newCollection[i]))
            newArray.push(newCollection[i])
    }
    return newArray
}

function mySize(collection) {
    const newCollection = handleInput(collection);
    return newCollection.length
}

function myFirst(array, n) {
    return (n) ? array.slice(0, n) : array[0]
}

function myLast(arr, start = false) {
    return (start) ? arr.slice(arr.length - start, arr.length) : arr[arr.length - 1];
}

function myKeys(object) {
    const keys = [];
    for (let key in object) {
        keys.push(key);
    }
    return keys
}

function myValues(object) {
    const values = [];
    for (let key in object) {
        values.push(object[key])
    }
    return values
}