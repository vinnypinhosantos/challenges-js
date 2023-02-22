// Challenge: create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out

// My Solution

function filter_list(list) {
    const result = []

    list.forEach((i) => {
        if (typeof i !== "string") {
            result.push(i)
        }
    })

    return result
}

console.log(filter_list([0, 1, 2, "Hello", "Bye"]))

// The best solution: using filter

function filter_list_best(list) {
    return list.filter(i => typeof i == "number")
}

console.log(filter_list_best([0, 1, 2, "Hello", "Bye"]))