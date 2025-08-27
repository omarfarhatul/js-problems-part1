function mileTokm(mile){
    const kilo =mile*1.60934;
    return kilo;
}
const km = mileTokm(2);
console.log(km);



function kmTomile(kilo){
    const mile =kilo*0.621371;
    return mile;
}
const mile = kmTomile(2);
console.log(mile);