//(a)
function countStringLength(input) {
    return input.length;
}
console.log("Number of letter in text: " + countStringLength("Box Stuff"));
//(b)
function countStringLengthNoSpace(input) {
    return input.replace(" ", "").length;
}
console.log("Number of letter in text: " + countStringLengthNoSpace("Box Stuff"));
//(c)
function countStringLengthFinal(input, spaces) {
    if (spaces) {
        return input.length;
    }
    else {
        return input.replace(" ", "").length;
    }
}
console.log("Number of letter in text: " + countStringLengthFinal("Box Stuff"));
