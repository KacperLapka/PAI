/**
 * Prints out `film` the number of times equal to a `ilerazy` varible. It also validates both params (title must not be null, empty or consisting only from spaces)
 * @constructor
 * @param {string} film - The title of the movie.
 * @param {number} ilerazy - The amount of times watched.
 * @returns {boolean} Was the validation succesfull
 */
function ulubionyFilm(film, ilerazy) {
    if (film == null) { // nazwa filmu jest pusta albo użytkownik klikną 
        alert("Prosze wprowadzić nazwę")
        return false // powtorzyć funkcje
    } else { // nazwa filmu nie jest pusta
        if (film.trim().length != 0) { // nazwa nie składa się z samych spacji
            if (isNaN(Number(ilerazy)) || Number(ilerazy) <= 0) { // liczba to nie liczba albo jest mniejsza równa od 0
                alert("to nie jest poprawna liczba")
                return false // powtorzyć funkcje
            } else {
                for (let index = 0; index < ilerazy; index++) { // 
                    console.log(index + 1 + ") " + film)
                }
                return true // nie powtarzamy funkcji (wszystko git)
            }
        } else {
            alert("Coś kombinujesz")
            return false // powtorzyć funkcje
        }
    }
}

while (true) { // nieskończona pętla
    let ulubionyfilm = prompt("Wprować swoj ulubiony film")
    let ilerazy = prompt("Ile razy oglądałeś ten film")
    if (ulubionyFilm(ulubionyfilm, ilerazy) == true) { // sprawdzamy czy funkcja zakończy sie sukcesem
        break // kończymy nieskończoną pętle
    }
}