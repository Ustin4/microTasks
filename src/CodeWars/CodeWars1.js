//return price without vat
function excludingVatPrice(price){
    let percentage  = 0.15
    const result = price / (1 + percentage)

    return price === null ? -1 :  parseFloat(result.toFixed(2));
}

console.log(excludingVatPrice())