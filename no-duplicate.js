// arary has some duplicate elements

const biryanikhor=['abul', 'babul', 'Kabul', 'babul', 'Habul'];
const numbers=[1, 3, 56, 4, 7, 3, 9];

function noDuplicate(array){
    const unique =[];
    for(const item of array){
        if(unique.includes(item)===false){
            unique.push(item);
        }
    }
    return unique;
}
const uniqueArray=noDuplicate(biryanikhor);
console.log(uniqueArray);
const uniqueArray2=noDuplicate(numbers);
console.log(uniqueArray2);