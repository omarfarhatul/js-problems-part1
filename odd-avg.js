// function takes an array as parameter
// give me average of the odd numbers in the array

function oddNum(number){
    const odds=[];
    for(const num of number){
        if(num%2===1){
            // console.log(num);
            odds.push(num);
        }
    }
    console.log(odds);
}
const number=[3, 52, 23, 12, 2, 31];
const n=oddNum(number);



// second part
function oddAverage(numbers){
    const odds=[];
    for(const num of numbers){
        if(num%2===1){
            // console.log(num);
            odds.push(num);
        }
    }
    // odds is the array that contains only the odd numbers
    // console.log(odds);
    let sum=0;
    for(const num of odds){
        sum = sum+num;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg=sum/count;
    return avg;
}

const numbers=[3, 52, 23, 12, 2, 31];
const avg=oddAverage(number);
console.log('Average of the odd numbers is: ', avg);