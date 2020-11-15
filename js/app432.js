function eventListeners(){
    const showBtn = document.getElementById("show-btn");
    const terminalCard = document.querySelector(".terminal-card");
    const closeBtn = document.querySelector(".close-btn");
    const form = document.getElementById("terminal-form");
    const feedback = document.querySelector(".feedback");
    const terminalInput = document.getElementById("terminal-input");
    const terminalaInput = document.getElementById("terminala-input");
    const terminalbInput = document.getElementById("terminalb-input");
    const terminalcInput = document.getElementById("terminalc-input");
    const terminaldInput = document.getElementById("terminald-input");
    const terminalList = document.getElementById("terminals-list");
    let id;


    const ui = new UI();
    let data = ui.retrieveLocalStorgage();
    if (data.length > 0){
        id = (data[(data.length-1)].id)+1;
    } else {
        id = 1;
    }
    data.forEach(function(terminal){
        ui.addTerminal(terminalList, terminal);
    })
    showBtn.addEventListener('click', function(){
        ui.showTerminal(terminalCard);
    });
    closeBtn.addEventListener('click', function(){
        ui.hideTerminal(terminalCard);
    });
    form.addEventListener('submit', function(event){
        event.preventDefault();

        const terminalValue = terminalInput.value;
        const terminalaValue = terminalaInput.value;
        const terminalbValue = terminalbInput.value;
        const terminalcValue = terminalcInput.value;
        const terminaldValue = terminaldInput.value;

        if (terminalValue === '' || terminalaValue === '' || terminalbValue === '' || terminalcValue === '' || terminaldValue === '') {
            feedback.classList.add('showItem', 'alert-danger');
            feedback.textContent = 'cannot add empty values';

            setTimeout(function(){
                feedback.classList.remove('alert-danger', 'showItem');    
            }, 3000)
        } else {
            const terminal = new Terminal(id, terminalValue, terminalaValue, terminalbValue, terminalcValue, terminaldValue);
            data.push(terminal);
            ui.addToLocalStorage(data);
            id++;
            ui.addTerminal(terminalList, terminal)
            ui.clearFields(terminalInput, terminalaInput, terminalbInput, terminalcInput, terminaldInput);
        }
    });
    terminalList.addEventListener('click', function(event){
        event.preventDefault();
    if(event.target.classList.contains('delete-terminalcard')){
        let id = event.target.dataset.id;

        terminalList.removeChild(event.target.parentElement.parentElement.parentElement);
        let tempData = data.filter(function(item){
            return item.id !== parseInt(id);
        });
        data = tempData;
        ui.addToLocalStorage(data);

    } else if (event.target.classList.contains('show-answer')){
            event.target.nextElementSibling.classList.toggle('showItem');
    } else if (event.target.classList.contains('edit-terminalcard')){
        let id = event.target.dataset.id;
        terminalList.removeChild(event.target.parentElement.parentElement.parentElement);

        ui.showTerminal(terminalCard);
        const tempTerminal = data.filter(function(item){
            return item.id === parseInt(id);
        });
        let tempData = data.filter(function(item){
            return item.id !== parseInt(id);
        });
        data = tempData;
        terminalInput.value = tempTerminal[0].title;
        terminalaInput.value = tempTerminal[0].titlea;
        terminalbInput.value = tempTerminal[0].titleb;
        terminalcInput.value = tempTerminal[0].titlec;
        terminaldInput.value = tempTerminal[0].titled;
        
    }  
    });
}
function UI(){
    UI.prototype.showTerminal = function(element){
        element.classList.add('showItem');
    }
    UI.prototype.hideTerminal = function (element) {
            element.classList.remove('showItem');
    }
    UI.prototype.addTerminal = function(element, terminal){
        const div = document.createElement('div');
        div.classList.add('col-md-4');
        div.innerHTML = `<div class="card card-body terminalcard my-3">
        <h4 class="text-capitalize">${terminal.title}</h4>
        <h4 class="text-capitalize">${terminal.titlea}</h4>
        <h4 class="text-capitalize">${terminal.titleb}</h4>
        <h4 class="text-capitalize">${terminal.titlec}</h4>
        <h4 class="text-capitalize">${terminal.titled}</h4>
        <div class="terminalcard-btn d-flex justify-content-between" id="noprint">
        <a href="#" id="edit-terminalcard" class=" btn-sm my-1 edit-terminalcard text-uppercase" data-id="${terminal.id}">edit</a>
        <a href="#" id="delete-terminalcard" class=" btn-sm my-1 delete-terminalcard text-uppercase" data-id="${terminal.id}">remove</a></div>
        </div>
    </div>`;
    element.appendChild(div);
    }
    UI.prototype.addToLocalStorage = function(data){
        localStorage.clear();
        const dataJSON = JSON.stringify(data);
        localStorage.setItem('terminal-terminals', dataJSON)
    }
    UI.prototype.retrieveLocalStorgage = function(){

        let savedTerminals = localStorage.getItem('terminal-terminals');
        if (savedTerminals){
            const savedTerminalsParsed = JSON.parse(savedTerminals);
            return savedTerminalsParsed;
        } else {
            return savedTerminals = [];
        }
        
    }

    UI.prototype.clearFields = function (terminal, terminala, terminalb, terminalc, terminald) {
        terminal.value = '';
        terminala.value = '';
        terminalb.value = '';
        terminalc.value = '';
        terminald.value = '';
    }
}
function Terminal(id, title, titlea, titleb, titlec, titled) {
    this.id = id;
    this.title = title;
    this.titlea = titlea;
    this.titleb = titleb;
    this.titlec = titlec;
    this.titled = titled;
    
}
document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})

