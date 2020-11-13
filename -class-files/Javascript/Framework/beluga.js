function CalcM(arr) {
    let result = 0
    for (let i = 0; i <= arguments.length - 1; i++) {
        result += arguments[i]
    }
    result /= arguments.length
    return result.toFixed(2)
}