function makeJuice(isCold){
    if(isCold){
        let juice="Make an Ice Juice"
    } else {
        let juice="Make a Hot Juice"
    }
    return juice;
}
console.log(makeJuice(false));
/*Output
ReferenceError: juice s not defined
*/