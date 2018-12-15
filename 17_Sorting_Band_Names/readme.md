# What I've learned

Quick sorting and mapping the result to the html element:

    `const sortedBands = bands.sort((a, b) => a > b ? 1 : -1);`
    
   `document.querySelector('#bands').innerHTML = 
    sortedBands
        .map(band =>``<li>${band}</li>``)
        .join('');`
    
 Note: **join(' ')** to get rid of commas in HTML; easy coupling with HTML with **map()**