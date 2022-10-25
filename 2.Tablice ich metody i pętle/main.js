let wejscie = prompt("Wprowadź jedno słowo o długości od 3 do 20 znaków.")
const punkty =
[
    { literki: [], punkty: 0},
    { literki:['A', 'E', 'I', 'N', 'O', 'R', 'S', 'W', 'Z'], punkty: 1},
    { literki:['C', 'D', 'K', 'L', 'M', 'P', 'T', 'Y'], punkty: 2},
    { literki:['B', 'G', 'H', 'J', 'Ł', 'U'], punkty: 3},
    { literki:['Ą', 'Ę', 'F', 'Ó', 'Ś', 'Ż'], punkty: 4},
    { literki:['Ć'],  punkty: 5},
    { literki:['Ń'], punkty: 6},
    { literki:['Ź'], punkty: 7},
];

if (wejscie && wejscie.trim() && wejscie.length >= 3 && wejscie.length <= 20 && wejscie.split(" ").length != 1) {
    let suma = 0;
    wejscie = wejscie.toUpperCase()
    wejscie.split('').forEach(function (wejscie_literka) {
        punkty.forEach(function (punktacja) {
            if (punktacja.literki.includes(wejscie_literka)) {
                suma = suma + punktacja.punkty;
            }
        });
    });
    console.log(suma)
} else {
    alert("Nie wprowadziłes nic dzbanie")
}