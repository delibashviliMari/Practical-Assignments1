// Function 1
function replaceString(str, valueToReplace, valueToReplaceWith) {
    let parts = str.split(valueToReplace); 
    return parts.join(valueToReplaceWith); 
}

// Function 2
function capitalizeWords(sentence) {
    let words = sentence.split(" "); 
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); 
    }
    return words.join(" "); 
}


console.log(replaceString("Hey world", "world", "JavaScript")); 
console.log(capitalizeWords("hello world from mariam")); 



// Function 3

function sortUsersByAge(users) {
    return users.sort((a, b) => a.age - b.age);
}


let usersArray = [
    { name: "Lasha", age: 30 },
    { name: "Saba", age: 20 },
    { name: "Mariam", age: 25 }
];

console.log(sortUsersByAge(usersArray));
