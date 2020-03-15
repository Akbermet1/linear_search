//input: search object and an array of objects
//output: index/indicies


//PSEUDOCODE FOR LINEAR SEARCH
// Step 1: define a function linearSearch
//Step 2: loop through search array
//If the search object and current object are the same, return index of current object
//If search object doesn't match any obj in search array, return undefined


//PSEUDOCODE FOR GLOBAL LINEAR SEARCH

//input: search object and an array
//output: index or indicies


//Step 1: define a loop globalSearch
//Step2: declare an array which will store indexes of matched objects inside the  globalSearch function, outside of the loop!
//Step3: loop through search array
//Step4: if current obj and search object are the same, save the index to array
//If search object matches one or more objects in the array, return the array of indecies
//If there are no matches, return undefined


function linearSearch(searchObj, searchArr){

    for(let index = 0; index < searchArr.length; index++){
        if(searchArr[index] === searchObj){
            return index
        }
    }
    return undefined
}

function globalSearch(searchPattern, searchList){
    var positions_array = new Array

    for(let index = 0; index < searchList.length; index++){
        if(searchList[index] === searchPattern){
            positions_array.push(index)
        }
    }

    if(positions_array.length > 0){
        return positions_array
    }

    return undefined
}

const array1 = ['a', 'b', 'c', 'a', 'c', 2, 'hello', 'c']

const result1 = linearSearch('c', array1)
console.log("result 1 = ", result1)

console.log("result 2 = ", linearSearch('e', array1))

console.log("global search result = ", globalSearch('c', array1))