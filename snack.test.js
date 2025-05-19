const { getInitials, createSlug, average, isPalindrome, findPostById, } = require('./snack.js');


// snack 01
test("La funzione getInitials restituisce le iniziali di un nome completo", () => {
    const nomeCompleto = "Ylenia Mighela"
    expect(getInitials(nomeCompleto)).toBe("YM");

})


// snack 02
test("La funzione createSlug restituisce una stringa in lowercase, con tutti i caratteri in minuscolo", () => {
    const saluto = "Buongiorno Mondo"
    expect(createSlug(saluto)).toBe("buongiorno-mondo")

})


// snack 03
test("La funzione average calcola la media aritmetica di un array di numeri", () => {
    expect(average([10, 10])).toBe(10)
})


// snack 04
test("La funzione createSlug sostituisce gli spazi con -", () => {
    expect(createSlug("Ciao a tutti")).toBe("ciao-a-tutti")
})

// snack 05
test("La funzione isPalindrome verifica se una stringa è un palindromo", () => {
    expect(isPalindrome("otto")).toBeTruthy();
    expect(isPalindrome("casa ")).toBeFalsy();


})

// snack 06
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido", () => {
    expect(() => createSlug("")).toThrow("Il titolo non può essere vuoto");


})


// snack 07
const posts = [
    { id: 1, title: "Post 1", content: "Contenuto del post 1" },
    { id: 2, title: "Post 2", content: "Contenuto del post 2" },
    { id: 3, title: "Post 3", content: "Contenuto del post 3" },

]
test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 3)).toEqual({ id: 3, title: "Post 3", content: "Contenuto del post 3" });
})