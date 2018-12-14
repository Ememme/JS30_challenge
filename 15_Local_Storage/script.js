const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// on pageload browser will check if there is localStorage or fallback on []
const items = JSON.parse(localStorage.getItem('items')) || [];


function addItem(event) {
    event.preventDefault();

    const description = (this.querySelector('[name=item]')).value;
    const item = {
        description,
        done: false
    };

    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    addItems.reset();
    populateList(items, itemsList);
}

function populateList(items = [], itemsList){
    itemsList.innerHTML = items.map((item,index) => {
        return `
            <li>
                <input type="checkbox" data-index="${index}" id="item${index}" ${item.done ? 'checked': ''}>
                <label for="item${index}">${item.description}</label>
            </li>
        `;
    }).join('');
// without join there will be commas visible in HTML code
}


function toggleDone(event) {
    // Check if clicked element was a checkbox
    if (!event.target.matches('input')) return;
    const clickedElement = event.target;
    const index = clickedElement.dataset.index;

    console.log(clickedElement.dataset.index);
    // toggling checkbox
    items[index].done = !items[index].done;
    // updating storage
    localStorage.setItem('items', JSON.stringify(items));
    // visual update to the list
    populateList(items, itemsList);
}



addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);

// TO-DO: 3 buttons: Clear All/ CheckAll/ UncheckAll with localStorage