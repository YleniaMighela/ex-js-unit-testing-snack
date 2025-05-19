// snack 01
function getInitials(nomeCompleto) {
    // split, divide la stringa in un array di parole
    const arrayNome = nomeCompleto.split(" ");
    // map, creo un nuovo array con solo le iniziali (chatAt(0)), tuUpperCase le converte in maiuscolo
    const iniziali = arrayNome.map((nome) => nome.charAt(0).toUpperCase());
    // join, unisce gli elementi del nuovo array in una stringa
    const inizialiUnite = iniziali.join("");
    return inizialiUnite

}


// snack 02
function createSlug(saluto) {
    const minuscolo = saluto.toLowerCase().replaceAll(" ", "-")
    return minuscolo
}


// snack 03
function average(arrayNumeri) {
    // se l'array è vuoto restituisci 0
    if (arrayNumeri.length === 0) {
        return 0;
    }
    // reduce somma tutti gli elementi dell'array
    const somma = arrayNumeri.reduce((acc, num) => acc + num, 0);
    // ritrna la somma divisa per la lunghezza dell'array
    return somma / arrayNumeri.length;

}

// snack 05
function isPalindrome(parolaPalindroma) {
    // split, divide la stringa in un array di parole
    const parola = parolaPalindroma.trim().split("");
    // reverse, inverte l'array
    const parolaRevertata = parola.reverse().join("");
    return parolaRevertata === parolaPalindroma.trim();

}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
};