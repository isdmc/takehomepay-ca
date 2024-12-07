export function parseIncomeInput(incomeInputStr) {
    const minValue = 0;
    const maxValue = 100*1000*1000;
    let sanitizedInputStr = incomeInputStr.replace(/(,|\s|\$)/g, '');
    let validDollarValueRegex = new RegExp(/^\d+(\.(\d){1,2})?$/);

    if (validDollarValueRegex.test(sanitizedInputStr))
    {
        let parsedValue = parseFloat(sanitizedInputStr);

        if (parsedValue >= minValue && parsedValue <= maxValue ) {
            return parsedValue;
        }
        return null;
    }
    return null;
}

export function showInvalidInputMessage()
{
    let message = document.getElementById('validity-message');
    message.style.display = 'inline';
}

export function hideInvalidInputMessage()
{
    let message = document.getElementById('validity-message');
    message.style.display = 'none';
}