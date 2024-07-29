// Importação do Módulo readline.

const rdln = require('node:readline');

// Este código configura uma interface de leitura que permite ao programa Node.js interagir com o usuário através do terminal. A interface lê entradas de teclado (definida por input: process.stdin) e escreve saídas no terminal (definida por output: process.stdout).

const rl = rdln.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Escuta o evento 'line' que é disparado sempre que o usuário insere uma linha de texto no console. 

rl.on('line', (input) => {
    console.log(`Received: ${input}`);
});

// Cria uma pergunta no prompt e aguarda a resposta do usuário

rl.question('O que vc acha do node.js?', (answer) => {
    console.log(`Legal: ${answer}`);
});

// Escuta o evento 'history' que pode ser usado para recuperar o histórico de comandos inseridos

rl.on('history', (history) => {
    console.log(`Received: ${history}`);
});

// É disparado quando a leitura é retomada após ser pausada.

rl.on('resume', () => {
    console.log('Readline resumed.');
});

// É disparado quando o usuário pressiona ctrl+c

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
});

// Define o texto do prompt que será exibido ao usuário

rl.setPrompt('Digite algo> ');

// Exibe o prompt para que o usuário possa começar a digitar
rl.prompt();

// Exibe uma mensagem na tela

rl.write(`Você digitou: teste`);

// Obtém o texto atual do prompt

console.log(rl.getPrompt());

//pode ser usado para obter ou definir a posição do cursor na linha atual.

console.log(rl.cursor);

// O método rl.getCursorPos() retorna um objeto que fornece informações sobre a posição atual do cursor na linha de comando.

console.log(rl.getCursorPos())

// Exibe a posição do cursor do prompt.

console.log('Posição do cursor (usando rl.getCursorPos()):', rl.getCursorPos());

// Limpar a linha inteira
rl.clearLine(1);

