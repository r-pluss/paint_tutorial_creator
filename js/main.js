const addRowBtn = document.getElementById('add-row-btn');
const tutBody = document.getElementsByTagName('main')[0];

function addRow(ev){
    let row = newRow();
    tutBody.appendChild(row);
}

function divideRow(ev){
    console.log(this);
    console.log(ev);
}

function newRow(){
    let el = document.createElement('div');
    el.classList.add('tut-row');
    let divBtn = document.createElement('div');
    let unDivBtn = document.createElement('div');
    divBtn.classList.add('divide-row');
    unDivBtn.classList.add('undivide-row');
    divBtn.addEventListener('click', divideRow.bind(el), {passive: true});
    el.appendChild(divBtn);
    el.appendChild(unDivBtn);
    return el;
}

addRowBtn.addEventListener('click', addRow, {passive: true});
