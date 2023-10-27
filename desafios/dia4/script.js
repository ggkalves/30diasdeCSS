const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Erro';
            }
        } else if (button.textContent === 'AC') {
            display.value = '';
        } else {
            display.value += button.textContent;
        }
    });
});
