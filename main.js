let counterId = 0;

function createCounter() {
    const counterDiv = document.createElement("div");
    counterDiv.classList.add("counter");

    var h1 = document.createElement("h1");
    h1.textContent = "Counter";
    h1.classList.add("counter-title");
    
    var btnInc = document.createElement("button");
    btnInc.classList.add("btn", "btn-inc");
    btnInc.textContent = "+";
    
    var h3Number = document.createElement("h3");
    h3Number.classList.add("number");
    h3Number.textContent = "0";
    
    var btnDec = document.createElement("button");
    btnDec.classList.add("btn", "btn-dec");
    btnDec.textContent = "-";
    
    var btnClr = document.createElement("button");
    btnClr.classList.add("btn", "btn-clr");
    btnClr.textContent = "C";

    var btnDelete = document.createElement("button");
    btnDelete.classList.add("btn", "btn-delete");
    btnDelete.textContent = "ลบ";
    counterDiv.dataset.counterId = counterId++;
    btnInc.addEventListener('click', function() {
        buttonplusClick(counterDiv);
    });

    btnDec.addEventListener('click', function() {
        buttondeleteClick(counterDiv);
    });

    btnClr.addEventListener('click', function() {
        buttoncClick(counterDiv);
    });

    btnDelete.addEventListener('click', function() {
        deleteCounter(counterDiv);
    });

    counterDiv.appendChild(h1);
    counterDiv.appendChild(h3Number);
    counterDiv.appendChild(btnInc);
    counterDiv.appendChild(btnDec);
    counterDiv.appendChild(btnClr);
    counterDiv.appendChild(btnDelete);
    document.body.appendChild(counterDiv);
    updateTotalCount();
}

function deleteCounter(counterDiv) {
    counterDiv.remove();
    updateTotalCount();
}

function buttonplusClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    count += 1;
    updateCounter(counterDiv, count);
    updateTotalCount();
}

function buttondeleteClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    count -= 1;
    if (count < 0) {
        count = 0;
    }
    updateCounter(counterDiv, count);
    updateTotalCount();
}

function buttoncClick(counterDiv) {
    let count = parseInt(counterDiv.querySelector('.number').textContent, 10);
    if (count > 0) {
        count = 0;
    }
    updateCounter(counterDiv, count);
    updateTotalCount();
}

function updateCounter(counterDiv, count) {
    counterDiv.querySelector('.number').innerHTML = count;
}

function updateTotalCount() {
    let totalCount = 0;
    document.querySelectorAll('.number').forEach(function(element) {
        totalCount += parseInt(element.textContent, 10);
    });
    document.getElementById('totalCount').textContent = totalCount;
}

