function roundToNDecimalPlaces(num, decimalsToKeep, isPercentage) {
    // need to multiply by an additional factor of 100 to 
    // make decimal > 1.
    let scalingFactor = isPercentage ? Math.pow(10, decimalsToKeep + 2) : Math.pow(10, decimalsToKeep); 
    return Math.round(scalingFactor * num) / scalingFactor;
}

module.exports = roundToNDecimalPlaces;