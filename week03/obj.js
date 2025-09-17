function getFreqWords(sentence){
    if (!sentence){
        return undefined
    }
    let splitSen = sentence.toLowerCase().split(' ')
    let result = {}
    for (let i of splitSen){
        if (result[i]){
            result[i] ++
        }else{
            result[i] = 1
        }
    }
    for (let key in result){
        if (!(result[key])){
            undefined
        }
    }
    return result
}


console.log(getFreqWords("Today is Present and present is your gift"));
console.log(getFreqWords("    "));
