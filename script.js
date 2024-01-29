const digitCont = document.querySelector('.digitCont');

let ID = 1;

for (let i = 0; i < 4; i++){
    const line = document.createElement('div');
    line.classList.add('line');

    for (let j = 0; j < 3; j++){
        const col = document.createElement('button');
        col.classList.add('col');
        col.setAttribute("id", ID.toString());

        ID++;

        col.textContent = (ID-1).toString();

        if (ID == 11) {
            col.textContent = "0"
        }

        if (ID == 12) {
            col.textContent = "Clear"
        }

        if (ID == 13) {
            col.textContent = "="
            col.style.backgroundColor = "lightsalmon";
        }

        line.appendChild(col);
    }

    digitCont.appendChild(line);
}

const digits = document.querySelectorAll('.col');

const display = document.querySelector('.display');

for (let i = 0; i < 9; i++){
    digits[i].addEventListener('click', () => {
        display.textContent = display.textContent + digits[i].id;
    })
}

digits[9].addEventListener('click', () => {
    display.textContent = display.textContent + '0';
})

digits[10].addEventListener('click', () =>{
    display.textContent = '';
})