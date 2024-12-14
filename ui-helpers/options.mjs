export function addShowHideOptionsListener(selectedOptionElementId, otherOptionsElementId) {
    let optionAndChildElements = [document.getElementById(selectedOptionElementId), ...document.querySelectorAll(`#${selectedOptionElementId} > *`)];
    for (let element of optionAndChildElements) {
        element.addEventListener('click', (event) => { 
            showHideOptions(otherOptionsElementId);
            event.stopPropagation(); 
        });
    }
}

function showHideOptions(selectedOptionsId) {
    let optionElementIds = ['region-options', 'frequency-options', 'year-options'];
    let selectedOptionsElement = document.getElementById(selectedOptionsId);
    let otherOptionElementIds = optionElementIds.filter(id => id !== selectedOptionsId);
    let otherOptionsElements = otherOptionElementIds.map(id => document.getElementById(id));

    if (getComputedStyle(selectedOptionsElement).display === 'none') {
        selectedOptionsElement.style.display = 'inline';
        for (let e of otherOptionsElements)
        {
            e.style.display = 'none';
        }
    } else {
        selectedOptionsElement.style.display = 'none';
    }
}

export function hideAllOptions() {
    let optionElementIds = ['region-options', 'frequency-options', 'year-options'];
    let optionElements = optionElementIds.map(id => document.getElementById(id));
    for (let e of optionElements)
    {
        e.style.display = 'none';
    }
}

export function getRegionImagePathByName(regionName) {
    switch(regionName) {
        case 'Alberta':
            return 'assets/alberta.svg';
        case 'British Columbia':
            return 'assets/british-columbia.svg';
        case 'Manitoba':
            return 'assets/manitoba.svg';
        case 'New Brunswick':
            return 'assets/new-brunswick.svg';
        case 'Newfoundland and Labrador':
            return 'assets/newfoundland-and-labrador.svg';
        case 'Northwest Territories':
            return 'assets/northwest-territories.svg';
        case 'Nova Scotia':
            return 'assets/nova-scotia.svg';
        case 'Nunavut':
            return 'assets/nunavut.svg';    
        case 'Ontario':
            return 'assets/ontario.svg';
        case 'Prince Edward Island':
            return 'assets/prince-edward-island.svg';
        case 'Quebec':
            return 'assets/quebec.svg';
        case 'Saskatchewan':
            return 'assets/saskatchewan.svg';
        case 'Yukon':
            return 'assets/yukon.svg';
    }
}

export function getFrequencyImagePathByName(frequencyName) {
    switch(frequencyName) {
        case 'Monthly':
            return 'assets/calendar-monthly.png';
        case 'Semi-Monthly':
            return 'assets/calendar-semi-monthly.png';
        case 'Bi-Weekly':
            return 'assets/calendar-bi-weekly.png';
        case 'Weekly':
            return 'assets/calendar-weekly.png';
    }
}

export function addUpdateSelectedOptionListener(selectedOptionId, selectedOptionCallback) {
    let selectedOptionElements = document.querySelectorAll(`#${selectedOptionId} > .dropdown-item`);
    for (let option of selectedOptionElements) {
        option.addEventListener('click', (event) => selectedOptionCallback(event));
    }
}

export function updateSelectedYear(event) {
    let updatedYear = event.target.innerText;
    let selectedYearElement = document.getElementById('selected-year');
    let selectedYear = selectedYearElement.querySelector('span');
    selectedYear.innerText = updatedYear;
}

export function updateSelectedRegion(event) {
    let updatedRegion = event.target.innerText; 
    let selectedRegionElement = document.getElementById('selected-region');
    let selectedRegionImageElement = selectedRegionElement.querySelector('img');
    let selectedRegionNameElement = selectedRegionElement.querySelector('span');

    selectedRegionImageElement.src = getRegionImagePathByName(updatedRegion);
    selectedRegionNameElement.innerText = updatedRegion;
}

export function updateSelectedFrequency(event) {
    let updatedFrequency = event.target.innerText;
    let selectedFrequencyElement = document.getElementById('selected-frequency');
    let selectedFrequencyImageElement = selectedFrequencyElement.querySelector('img');
    let selectedFrequencyNameElement = selectedFrequencyElement.querySelector('span');

    selectedFrequencyImageElement.src = getFrequencyImagePathByName(updatedFrequency);
    selectedFrequencyNameElement.innerText = updatedFrequency;
}