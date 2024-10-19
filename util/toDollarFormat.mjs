export default function(num, decimalsToKeep = 2, locale = 'en') {
    return num.toFixed(decimalsToKeep).toLocaleString(locale);
}