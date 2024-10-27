const dollarFormat = new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD'});

export default function(num) {
    return dollarFormat.format(num);
}