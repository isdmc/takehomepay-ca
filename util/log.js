module.exports = function(x) {
    let varName = Object.keys(x)[0];
    console.log(`${varName}: ${Object.values(x)[0]}`);
}