// Selecionar o display
let display = document.querySelector('.display');

// Função para adicionar caracteres ao display
function addToDisplay(value) {
	// Verificar se o valor atual no display é 0
	if (display.textContent === '0') {
		display.textContent = value;
	} else {
		display.textContent += value;
	}
}

// Função para limpar o display
function clearDisplay() {
	display.textContent = '0';
}

// Função para remover o último caractere do display
function backspace() {
	display.textContent = display.textContent.slice(0, -1);
	if (display.textContent === '') {
		display.textContent = '0';
	}
}

// Função para calcular o resultado da expressão no display
function calculate() {
	display.textContent = eval(display.textContent);
}