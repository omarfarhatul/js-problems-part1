// 12 inch = 1 feet
function inchTofeet(inch){
    const feet = inch/12;
    return feet;
}
function inchTofeet2(inch){
    const feetFrection = inch/12;
    const feetNumber = parseInt(feetFrection);
    const inchRemaining = inch%12;
    const result = feetNumber+'ft '+inchRemaining+' inch.'
    return result;
}
const shuoHeight = inchTofeet(75);
const shuoHeight2 = inchTofeet2(75);
console.log(shuoHeight);
console.log(shuoHeight2);