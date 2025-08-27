// you will be a leap year if the year is divisible by 4

function isleapyear(year){
    if(year%4 === 0){
        return true;
    }
    else{
        return false;
    }
}

function isleapyear2(year){
    if(year%100 !==0 && year%4===0){
        return true;
    }
    else if(year%100===0 && year%400===0){
        return true;
    }
    else{
        return false;
    }
}

const islip = isleapyear(2055);
const islip2 = isleapyear2(2024);
const islip3 = isleapyear2(2026);
const islip4 = isleapyear2(2080);

console.log(islip, islip2, islip3, islip4);