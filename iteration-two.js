const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(list) {
    word = ''
    for(let i = 0; i < list.length; i++){
        if(list[i].length > word.length){
            word = list[i];
        }
    }return word;
}

console.log(findLongestWord(avengers));