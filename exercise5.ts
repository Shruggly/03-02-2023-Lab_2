//(a)
function countStringLength(input: string): number { 
    return input.length;
}

console.log("Number of letters in text: "+countStringLength("Box Stuff"));

//(b)
function countStringLengthNoSpace(input: string): number { 
    return input.replace(" ","").length;
}

console.log("Number of letters in text: "+countStringLengthNoSpace("Box Stuff"));

//(c)
function countStringLengthFinal(input: string, spaces?:boolean): number { 
    if (spaces) {
        return input.length;
    } else {
        return input.replace(" ","").length;
    }
}

console.log("Number of letters in text: "+countStringLengthFinal("Box Stuff"));