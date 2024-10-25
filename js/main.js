document.querySelector('button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.screen1').classList.toggle('hide');
    document.querySelector('.screen2').classList.toggle('hide');
});

document.querySelector('.screen1').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#msg-sorte').innerHTML = msg();
    document.querySelector('.screen1').classList.toggle('hide');
    document.querySelector('.screen2').classList.toggle('hide');
});

const msg = () => {
    const messages = [
        'Procure acender uma vela em vez de amaldiçoar a escuridão.',
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
        'A vida trará coisas boas se tiveres paciência.',
        'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
        'Não compense na ira o que lhe falta na razão.',
    ];

    const msgIndex = Math.floor(Math.random() * messages.length);
    return messages[msgIndex];
}



