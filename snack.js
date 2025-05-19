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



module.exports = {
    getInitials,
};