const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
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

addItems.addEventListener('submit', addItem);
populateList(items, itemsList);