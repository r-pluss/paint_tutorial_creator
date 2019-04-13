const addRowBtn = document.getElementById('add-row-btn');
const tutBody = document.getElementsByTagName('main')[0];

function addRow(ev){
    let row = newRow();
    tutBody.appendChild(row);
}

function newRow(){
    let el = document.createElement('div');
    el.classList.add('tut-row');
    let divBtn = document.createElement('div');
    divBtn.classList.add('divide-row');
    el.appendChild(divBtn);
    return el;
}

addRowBtn.addEventListener('click', addRow, {passive: true});
