// 12 inch = 1 feet
function inchTofeet(inch){
    const feet = inch/12;
    return feet;
}
const shuvoHeight = inchTofeet(75);
console.log(shuvoHeight);