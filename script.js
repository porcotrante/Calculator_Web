const digitCont = document.querySelector('.digitCont');
const display = document.querySelector('.display');

let ID = 1;

for (let i = 0; i < 4; i++){
    const line = document.createElement('div');
    line.classList.add('line');

    for (let j = 0; j < 4; j++){
        const col = document.createElement('button');
        col.classList.add('col');
        col.setAttribute("id", ID.toString());

        col.textContent = (ID).toString();

        if (col.id == 4){
            col.textContent = '+';
            col.style.backgroundColor = 'darkblue'
            col.style.color = 'white'
        }

        else if (col.id == 8){
            col.textContent = '-';
            col.style.backgroundColor = 'darkblue'
            col.style.color = 'white'
        }

        else if (col.id == 12){
            col.textContent = 'x';
            col.style.backgroundColor = 'darkblue'
            col.style.color = 'white'
        }

        else if (col.id == 16){
            col.textContent = '/';
            col.style.backgroundColor = 'darkblue'
            col.style.color = 'white'
        }

        else if (col.id > 4 && col.id < 8){
            col.textContent = (ID - 1).toString();
        }

        else if (col.id > 8 && col.id < 12){
            col.textContent = (ID - 2).toString();
        }

        else if (col.id == 13){
            col.textContent = '0';
        }

        else if (col.id == 14){
            col.textContent = 'clear';
        }

        else if (col.id == 15){
            col.textContent = '=';
            col.style.backgroundColor = 'lightsalmon';
        }

        ID++;

        line.appendChild(col);
    }

    digitCont.appendChild(line);
}

const digits = document.querySelectorAll('.col');

for (let i = 0; i < 13; i++){
    digits[i].addEventListener('click', () => {
        display.textContent = display.textContent + digits[i].textContent;
    })
}

digits[13].addEventListener('click', () =>{
    display.textContent = '';
})

digits[15].addEventListener('click', () => {
    display.textContent = display.textContent + digits[15].textContent;
})

console.log(digits[15].textContent);