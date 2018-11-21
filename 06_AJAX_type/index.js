const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const form = document.querySelector('.search-form');

// Array for storing fetched data

const cities = [];
const prom = fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data));

// Formatting number for population field
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Function to find looked-up word in the fetched array of cities
function findMatch(searchedWord, cities) {
    return cities.filter(place => {
        // g: search in the entire string, i: case insensitive
        const regex = new RegExp(searchedWord, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

const searchInput = document.getElementsByClassName('search')[0];
const suggestions = document.querySelector('.suggestions');
function displayMatches(){
    const matchArray = findMatch(this.value, cities);
    // creating regex to locate searched item in string and enable highlight
    // hooking up matches to html element
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const citiName = place.city.replace(regex, `<span class='hl'>${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class='hl'>${this.value}</span>`);

        return `
        <li>
            <span class="name">${citiName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);