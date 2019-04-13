const addRowBtn = document.getElementById('add-row-btn');
const tutBody = document.getElementByTagName('main')[0];

function addRow(ev){
    let row = newRow();
    tutBody.appendChild(row);
}

function newRow(){
    let el = document.createElement('div');
    el.classList.add('tut-row');
    return el;
}

addRowBtn.addEventListener('click', addRow, {passive: true});
