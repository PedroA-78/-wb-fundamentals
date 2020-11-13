function CalcM(arr) {
    // if (Array.isArray(arr)) {
    //     alert("array")
    //     if (arr.length <= 1) {
    //         return "Você não inseriu números o sulficiente para o cálculo"
    //     } else {
    //         let calc = arr.reduce(function(num, newNum){
    //             return  num + newNum
    //         })
    //         calc /= arr.length
    //         return calc.toFixed(1)
    //     }
    // }
    if (arguments.length <= 1) {
        return "Você não inseriu números o sulficiente para o cálculo"
    } else {
        let result = 0
        for (let i = 0; i <= arguments.length - 1; i++) {
            result += arguments[i]
        }
        result /= arguments.length
        return result.toFixed(1)
    }
    
}

function raffle(max) {
    let n = max || 10
    return Math.floor(Math.random() * n + 1)
}