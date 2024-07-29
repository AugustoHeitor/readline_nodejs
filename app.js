const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let points = 0;
let index = 0;
let user = '';

const questions = [
    { question: "Qual é a capital da França? ", answer: "Paris" },
    { question: "Qual é a soma de 2 + 2? ", answer: "4" },
    { question: "Qual é o maior planeta do sistema solar? ", answer: "Jupiter" }
]

rl.question('Qual é o seu nome? ', (name) => {

    rl.question(`Vamos começar, ${name}, então? `, (answer) => {
        if (answer.toLowerCase() === 'sim') {

            user = name;

            askQuestions(questions);

        } else {
            console.log(`${name}, volte quando estiver pronto!`);
            rl.pause();
        }
    });
});

const askQuestions = (array) => {
    if (array.length > 0) {

        if ((index + 1) <= array.length) {
            rl.question(`${array[index].question}`, (answer) => {

                if (answer.toLowerCase() === array[index].answer.toLowerCase()) {

                    index += 1;
                    points += 10;

                    console.log(`Name: ${user} | Points: ${points}`);
                    askQuestions(questions);

                } else {

                    console.log(`Fim de jogo. Você fez um total de ${points} pontos.`);

                    rl.pause();

                }
            });
        } else {

            console.log(`Parabéns, você venceu o jogo, Fez um total de ${points} pontos.`);

            rl.pause();

        }
    } else {

        console.error('Adicione perguntas!');

        rl.pause();

    }
}


rl.on('SIGINT', () => {

    rl.question('Você tem certeza que quer sair? ', (answer) => {
        if (answer.match(/^s(im)?$/i)) rl.pause();
    });

});