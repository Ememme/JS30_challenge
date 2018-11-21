const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
console.log('Hi ');
const form = document.querySelector('.search-form');
console.log(form);

// Array for storing fetched data

const cities = [];

const prom = fetch(endpoint)
    .then(data => data.json())
    .then(data => cities.push(...data));

// Function to find looked-up word in the fetched array of cities
function findMatch(searchedWord, cities) {
    return cities.filter(place => {
        // g: search in the entire string, i: case insensitive
        const regex = new RegExp(searchedWord, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches(){
    const matchArray = findMatch(this.value, cities);
    console.log(matchArray);
}

const searchInput = document.getElementsByClassName('search')[0];
const suggestions = document.querySelectorAll('.suggestions')
console.log(searchInput);
console.log(suggestions);

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);