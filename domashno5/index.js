function printFunc(seconds) {
    if (typeof seconds !== 'number') {
        console.log("Please enter number")
        return 
    }
    if (seconds < 0 || seconds > 9 || Math.floor(seconds) !== seconds) {
        console.log("Please enter one digit number")
        return 
    }
    setTimeout(function() {
        console.log("Coding is not that hard!")
    }, 1000)
}

printFunc(3)
printFunc("A")
printFunc(10)


