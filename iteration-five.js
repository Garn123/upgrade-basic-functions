const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(list) {
    let sum = 0;
    for(let i = 0; i < list.length; i++){
        if(typeof list[i] === 'string') {
            sum += list[i].length;
        }else{
            sum += list[i]
        }
    }
    return sum;
}

console.log(averageWord(mixedElements))