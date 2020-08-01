function makeCoffee(isHot) {
    if (isHot) {
        var coffee = "Make an Hot Coffee"
    } else {
        var coffee = "Make a Ice Coffee"
    }
    return coffee;
}
console.log(makeCoffee(false));
/*Output
Make a Ice Coffee
*/