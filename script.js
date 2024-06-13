// déclarer les constantes
const input = document.getElementById('input');
const operator = document.getElementById('select');
const input2 = document.querySelector('.input2');
const calculer = document.querySelector('.calculer');
const show = document.querySelector('.hover');

calculer.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        // utiliser eval() pour calculer la string 
        let  operation = eval(`${input.value} ${operator.value} ${input2.value}`);
        // afficher le resultat
        alert(operation)
    } catch (error) {
        alert('error')
    }
})

// faire apparaître la calculatrice
document.querySelector('.show-calculator').addEventListener('click', () => {
    document.querySelector('.calculatrice').style.display = 'flex';
    document.querySelector('.hide-calculator').style.display = 'flex';
})

// faire disparaitre la calculatrice
document.querySelector('.hide-calculator').addEventListener('click', () => {
    document.querySelector('.calculatrice').style.display = 'none';
    document.querySelector('.hide-calculator').style.display = 'none';
    document.querySelector('.show-calculator').style.display = 'flex';
})

// hover sur le input
input.addEventListener('mouseover', () => {
    show.innerHTML = 'saisir un chiffre';
})
input.addEventListener('mouseout', () => {
    show.innerHTML = '';
})

// hover sur le input2
input2.addEventListener('mouseover', () => {
    show.innerHTML = 'saisir un chiffre';
})
input2.addEventListener('mouseout', () => {
    show.innerHTML = '';
})

// hover sur le select
operator.addEventListener('mouseover', () => {
    show.innerHTML = 'saisir un operateur : + - / *';
})
operator.addEventListener('mouseout', () => {
    show.innerHTML = '';
})