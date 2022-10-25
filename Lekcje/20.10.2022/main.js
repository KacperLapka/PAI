// --------------------------------------------
// Tworzenie tablica
// --------------------------------------------
const tab = [] // pusta tablica
const tab2 = [1,2,3,4]; // tablica z 4 liczbami
const tab3 = ['Marcin', 'Ania', 'Agnieszka']; // tablica z 3 elementami

const a = "ALA";
const b = 234;
const c = "PIES";
const tab4 = [a, b, c, "KOT", {...}]; // tablica z 5 elementami. Mogą być oddzielne zmienne, ale też wartości wpisane w tablicy

// --------------------------------------------
// Pobieranie danego elementu z tablicy
// --------------------------------------------
const tab = ["Ala", "ma", "rudego", "kota"];
console.log(tab[0]); // Ala
console.log(tab[1]); // ma
console.log(tab[2]); // rudego
console.log(tab[3]); // kota

// --------------------------------------------
// Tablice wielowymiarowe
// --------------------------------------------
const tab = [
    ['Marcin', '183'],
    ['Ania', '173'],
    ['Agnieszka', '170']
]
console.log('imię: ' + tab[0][0] + ', wzrost: ' + tab[0][1]);
console.log('imię: ' + tab[1][0] + ', wzrost: ' + tab[1][1]);
console.log('imię: ' + tab[2][0] + ', wzrost: ' + tab[2][1]);

// Lub

{
    const user = tab[0];
    console.log('imię: ' + user[0] + ', wzrost: ' + user[1]);
}
{
    const user = tab[1];
    console.log('imię: ' + user[0] + ', wzrost: ' + user[1]);
}
{
    const user = tab[2];
    console.log('imię: ' + user[0] + ', wzrost: ' + user[1]);
}

const tab = ['Marcin', 'Ania', 'Agnieszka'];
console.log(tab.length); // Wielkość tabeli = 3
console.log(tab[tab.length - 1]); // Ostatni obiekt z tabeli

const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab.push("Piotrek");
console.log(tab); // ['Marcin', 'Ania', 'Agnieszka','Piotrek']
tab.push("Y","Z");
console.log(tab) // ['Marcin', 'Ania', 'Agnieszka','Piotrek','Y','Z']

// --------------------------------------------
// Dodawanie elementów do tablicy
// --------------------------------------------

const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab[3] = "Piotrek"; // ! Niebezpieczne !
// lub
tab[tab.length] = "Piotrek" // W miare poprawne
console.log(tab); // ['Marcin', 'Ania', 'Agnieszka','Piotrek']

// --------------------------------------------
// Zamienianie elementów w tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab[2] = "Piotrek"; // ! Niebezpieczne !
console.log(tab); // ['Marcin', 'Piotrek', 'Agnieszka']

// Przykład złego przypisania do tablicy (przestrzelenie)
const tab = ['Marcin','Ania'];
tab[6] = 'Piotrek';
console.log(tab) // ['Marcin', 'Ania', empty x4, 'Piotrek']

// --------------------------------------------
// Ostatni element tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
const last = tab.pop()
console.log(last); // Agnieszka - Zwraca wartość
console.log(tab); // ['Marcin', 'Ania']

// --------------------------------------------
// Wstawia elementy na początek tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab.unshift('Bartek');
tab.unshift('Piotrek', 'Paweł');
console.log(tab); // ['Piotrek', 'Paweł','Bartek','Marcin', 'Ania']

// --------------------------------------------
// Usuwa pierwszy element z tablicy i zwraca wartość
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
const elDeleted = tab.shift()
console.log(tab); // ['Ania', 'Agnieszka']
console.log(elDeleted); // Marcin - Zwraca wartość

tab.unshift(elDeleted.toUpperCase()) // Przeciwieństwo shift [wsadza na początek tabeli]

console.log(tab); // ['MARCIN', Ania', 'Agnieszka']

// --------------------------------------------
// Zamienianie tablicy na stringa
// --------------------------------------------
const ourTable = ['Marcin', 'Ania', 'Agnieszka'];

console.log(ourTable.join()); // Marcin,Ania,Agnieszka

console.log(ourTable.join(" - ")); // Marcin - Ania - Agnieszka

console.log(ourTable.join(" <-HEJ-> ")); // Marcin <-HEJ-> Ania <-HEJ-> Agnieszka

// --------------------------------------------
// Zamienianie tablicy na stringa metoda na debila
// --------------------------------------------
const cars = ['Passat', 'Mercedes', 'BMW'];

let str = "";
for (let i = 0; i < cars.length; i++) {
    str += cars[i] + ', ';
}

console.log(str); // Passat, Mercedes, BMW, 

const cars = ["Mercedes", "Audi", "BMW"]
console.log(cars.join(", ")); // Mercedes, Audi, BMW


const text = ["Ala ma kota", "a kot ma Alę", "Ala go kocha", "A kot ją w cale"];
console.log(text.join("<br>"))

// --------------------------------------------
// Odwracanie tabeli
// --------------------------------------------
const tab = [1,2,3,4];
console.log("Przed:" + tab); // 1,2,3,4
tab.reverse()
console.log("Po:" + tab); // 4,3,2,1

// --------------------------------------------
// Sortowanie
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Piotrek', 'Grześ'];
tab.sort();
console.log(tab) // [ "Ania", "Grześ", "Marcin", "Piotrek" ]

// --------------------------------------------
// Sortowanie od tyłu
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Piotrek', 'Grześ'];
tab.sort().reverse();
console.log(tab) // [ "Piotrek", "Marcin", "Grześ", "Ania" ]

// --------------------------------------------
// Własne sortowanie
// --------------------------------------------
function sortNr(a, b){
    return a - b;
}

const tab = [100, 320, 10, 25, 310 , 1200, 400]

const tab3 = tab.sort(sortNr);
console.log(tab3) // [ 10, 25, 100, 310, 320, 400, 1200 ]


const tab = [100, 320, 10, 25, 310 , 1200, 400]

const tab3 = tab.sort(function (a, b){
    return a - b;
});
console.log(tab3) // [ 10, 25, 100, 310, 320, 400, 1200 ]

// --------------------------------------------
// Własne sortowanie DUŻE LITERY
// --------------------------------------------
const tab = [
    { name: 'Marcin', height: 183},
    { name: 'Ania', height: 173},
    { name: 'Agnieszka', height: 170},
]

const tab2 = tab.sort(function (a, b){
    return a.name.localeCompare(b.name); // porównywanie
})

console.log(tab2);

/*
1: Object { name: "Agnieszka", height: 170 } 
2: Object { name: "Ania", height: 173 } 
3: Object { name: "Marcin", height: 183 }
*/


const users = [
    {
        name: 'Marcin',
        car: {
            name: "Toyota",
            age: 10
        }
    },
    {
        name: 'Marcin',
        car: {
            name: "Fiat",
            age: 15
        }
    },
    {
        name: 'Monika',
        car: {
            name: "BMW",
            age: 5
        }
    },
    {
        name: 'Jan',
        car: {
            name: "Fiat",
            age: 15
        }
    },
    {
        name: 'Monika',
        car: {
            name: "BMW",
            age: 5
        }
    },
]

// Sortuje po wieku samochodu
users.sort((a,b) => {
    return a.car.age - b.car.age
});
console.log(users);

/* 
0: Object { name: "Monika", car: {…} }
​
1: Object { name: "Monika", car: {…} }
​
2: Object { name: "Marcin", car: {…} }
​
3: Object { name: "Marcin", car: {…} }
​
4: Object { name: "Jan", car: {…} }
*/

const tab = [
    ['Adam', 160],
    ['Marcin', 183],
    ['Ania', 173],
    ['Jan', 167],
    ['Agnieszka', 170],
]

tab.sort(function (a, b){
    return a - b
})

console.log(tab);

/*
0: Array [ "Adam", 160 ]
​
1: Array [ "Marcin", 183 ]
​
2: Array [ "Ania", 173 ]
​
3: Array [ "Jan", 167 ]
​
4: Array [ "Agnieszka", 170 ]
*/

const tab = [
    ['Adam', 160],
    ['Marcin', 183],
    ['Ania', 173],
    ['Jan', 167],
    ['Agnieszka', 170],
]

tab.sort(function (a, b){
    return a[1] - b[1]
})

console.log(tab);

/*
0: Array [ "Adam", 160 ]
​
1: Array [ "Jan", 167 ]
​
2: Array [ "Agnieszka", 170 ]
​
3: Array [ "Ania", 173 ]
​
4: Array [ "Marcin", 183 ]
*/

const tab = [
    ['Adam', 160],
    ['Marcin', 183],
    ['Ania', 173],
    ['Jan', 167],
    ['Agnieszka', 170],
]

tab.sort(function (a, b){
    return a[1] - b[1]
}).reverse();

console.log(tab);

/*
0: Array [ "Marcin", 183 ]
​
1: Array [ "Ania", 173 ]
​
2: Array [ "Agnieszka", 170 ]
​
3: Array [ "Jan", 167 ]
​
4: Array [ "Adam", 160 ]
*/

// --------------------------------------------
// concat() - Łączenie dwóch tablic
// --------------------------------------------

// Nie zadziała
const tab1 = ['Ala', 'Basia'];
const tab2 = ['Piotr', 'Marcin'];
console.log(tab1 + tab2); // Ala,BasiaPiotr,Marcin Zrobiło nam z tego stringa

// Zadziała
const tab1 = ['Ala', 'Basia'];
const tab2 = ['Piotr', 'Marcin'];
console.log(tab1.concat(tab2)); // [ "Ala", "Basia", "Piotr", "Marcin" ]

// --------------------------------------------
// Łączenie dwóch tablic
// --------------------------------------------
const tab1 = ['Pies', 'Kot'];
const tab2 = ['Słon', 'Wieloryb'];
const table = [...anim1, ...anim2];
console.log(table) // [ "Pies", "Kot", "Słoń", "Wieloryb" ]

// --------------------------------------------
// Zwracanie kawałka tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Magda'];

const tab2 = tab.slice(0, 1);
console.log(tab2);  // ['Marcin']
console.log(tab);  // ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Magda']
 
const tab3 = tab.slice(2) 
console.log(tab3); // ['Agnieszka', 'Monika', 'Magda']

const tab4 = tab.slice(0,3);
console.log(tab4); // ['Marcin', 'Ania', 'Agnieszka', 'Monika', 'Magda']

const tab5 = tab.slice(-2);
console.log(tab5); // ['Monika', 'Magda']

const tab6 = tab.slice(2, -1);
console.log(tab6); // ['Agnieszka', 'Monika']

// --------------------------------------------
// splice() - usuwanie lub dodawanie elementow
// --------------------------------------------
// składnia: splice(index, ileUsunąć, noweElementy)
const tab = ['Marcin', 'Ania', 'Agnieszka'];

tab.splice(1,1); // od indexu 1 usuwa 1 element
console.log(tab); // ['Marcin', 'Agnieszka']

tab.splice(1, 0, 'Monika', 'Magda') // nic nie usuwa i wstawia nowe elementy przed index 1
console.log(tab); // ['Marcin', 'Monika', 'Magda', 'Agnieszka']

// --------------------------------------------
// fill() - wypełnianie tablicy
// --------------------------------------------
const tab = [1, 2, 3, 4, 5];
console.log(tab); // [1, 2, 3, 4, 5]
tab.fill("x", 1);
console.log(tab); // [1, "x", "x", "x", "x"]

const tab2 = [1, 2, 3, 4, 5];
tab2.fill("y", 2, 4);
console.log(tab2); // [1, 2, "y", "y", 5]

// --------------------------------------------
// flat() - płaszczenie tablicy
// --------------------------------------------
const tab = [
    1,
    [2, 3],
    [4, 5, [6, 7]],
    [[[8, 9], [10, 11]]]
]
console.log(tab); // [1, [2, 3], [4, 5, [6, 7]], [[[8, 9], [10, 11]]]]
console.log(tab.flat(1)); // [1, 2, 3, 4, 5, [6, 7], [[8, 9], [10, 11]]]
console.log(tab.flat(2)); // [1, 2, 3, 4, 5, 6, 7, [8, 9], [10, 11]]
console.log(tab.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// --------------------------------------------
// Pętla tablicy FOR
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];

for (let i = 0; i < tab.length; i++) {
    console.log('licznik pętli: ' + i);
    console.log('element: ' + tab[i]);
}
/*
licznik pętli: 0
element: Marcin
licznik pętli: 1
element: Ania
licznik pętli: 2
element: Agnieszka 
*/

// --------------------------------------------
// forEach() - automatyczna pętla po tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];

// pod zmienną el trafią kolejne elementy
tab.forEach(function (el) {
    console.log(el.toUpperCase());
});
/*
MARCIN debugger
ANIA debugger
AGNIESZKA
*/

// pod zmienną i będzie wstawiany indeks elementu
tab.forEach(function (el, i) {
    console.log(i + " | " + el);
});
/*
0 | Marcin
1 | Ania
2 | Agnieszka
*/

// pod zmienną arr wstawiana będzie aktualna tablica po której iterujemy
tab.forEach(function (el, i, arr) {
    console.log("Element: " + i + " z " + arr.length + " el.Wartość: " + el);
});
/*
Element: 0 z 3 el.Wartość: Marcin
Element: 1 z 3 el.Wartość: Ania
Element: 2 z 3 el.Wartość: Agnieszka
*/

// --------------------------------------------
// forEach() - drugi parametr
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
tab.forEach(function () {
    console.log(this);
}); 
/*
Window
Window
Window
*/

const ob = {
    name: "Marcin"
};
tab.forEach(function () {
    console.log(this); // ob
}, ob)

const tab = [1, 3, 5, 8, 9];

const allEven = tab.every(function (el) {
    return el % 2 === 0;
});
console.log(allEven); // false (przynajmniej jedna liczba nie jest nieparzysta)

const tab2 = [
    { name: "Marcin", age: 18 },
    { name: "Ania", age: 16 },
    { name: "Agnieszka", age: 16 },
];

const allAdult = tab2.every(function (el){
    return el.age >= 18;
});

console.log(allAdult); // false - nie wszyscy mają 18 lat

// --------------------------------------------
// some() - sprawdza czy chodz jeden parametr jest true
// --------------------------------------------
const tab = ["kot", "pies", "świnka", "jeż"];

const word3letter = tab.some(function (el) {
    return el.length === 3;
});
console.log(word3letter); // true (tablica zawiera elementy ktore mają 3 znaki)

const tab = [
    { name: "Marcin", age: 18 },
    { name: "Ania", age: 16 },
    { name: "Agnieszka", age: 16 },
]
const allAdult = tab2.some(function (el){
    return el.age >= 18;
});

console.log(allAdult); // true - przynajmniej jedna osoba ma

// --------------------------------------------
// map() - tworzenie nowej tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];

const tab2 = tab.map(function (el) {
    return el.toUpperCase() + '!'
});

console.log(tab) // [ "Marcin", "Ania", "Agnieszka" ]
console.log(tab2) // [ "MARCIN!", "ANIA!", "AGNIESZKA!" ]

// --------------------------------------------
// filter() - przesiewanie tablicy
// --------------------------------------------
const ourTable = [1, 2, 3, 4, 5, 6];
const evenNumbers = ourTable.filter(function (el) {
    return el % 2 === 0;
});
console.log(evenNumbers); // [ 2, 4, 6 ] (zwraca tylko te liczby ktore przeszedły sprawdzenie el % 2 === 0)

const tab = [
    { name: "Marcin", age: 18 },
    { name: "Ania", age: 16 },
    { name: "Agnieszka", age: 16 },
    { name: "Beata", age: 22 },
]
const adultUsers = tab.filter(function (user){
    return user.age >= 18;
});
console.log(adultUsers) // [{ name: "Marcin", age: 18 }, { name: "Beata", age: 22 }]

// --------------------------------------------
// reduce() - redukowanie tablicy
// --------------------------------------------
const ourTable = [1, 2, 3, 4];
const result = ourTable.reduce(function (prev, next) {
    return prev + next;
});

console.log(result); // 10

// atrybut po funkcji ta początkowa wartość
const sum1 = [1, 2, 3].reduce(function (a, b){
    return a+b;
}, 2);

console.log(sum1); // sum1 = 8

const sum2 = [1, 2, 3].reduce(function (a, b){
    return a+b;
}, "");

console.log(sum2); // sum2 = "123" - bo podstawiliśmy string ""

// --------------------------------------------
// indeOf() - wyszukiwanie elementow w tablicy (pierwszy index)
// --------------------------------------------

const tab = ['Marcin', 'Agnieszka', 'Ania', 'Monika'];

if (tab.indexOf('Ania') !== -1) {
    console.log('Ania występuje w tablicy pod indexem ' + tab.indexOf('Ania'));
}

// --------------------------------------------
// indeOf() - wyszukiwanie elementow w tablicy (ostatni index)
// --------------------------------------------

const tab = ['Marcin', 'Agnieszka', 'Ania', 'Monika'];

if (tab.lastIndexOf('Ania') !== -1) {
    console.log('Ostatnie wystąpienie w tablicy to ' + tab.lastIndexOf('Ania'));
}

// --------------------------------------------
// includes() - wyszukiwanie elementu w tablicy
// --------------------------------------------
const tab = ['Marcin', 'Ania' , 'Agnieszka', 'Ania', 'Monika'];

if (tab.includes('Ania')) {
    console.log('Ania występuje w tablicy pod indexem ' + tab.indexOf('Ania'));
}

if (!tab.includes('Pies')) {
    console.log('Pies nie występuje w tej tablicy');
}


const tab2 = [12, 5, 8, 130, 44];
const bigNr = tab2.find(function (el) {
    return el >= 15
});

console.log(bigNr); // 130

// --------------------------------------------
// Łączenie metod
// --------------------------------------------
const text = "Ala ma kota";

console.log(text.toUpperCase().substr(0, 3).length);

const tab = ['Marcin', 'Ania', 'Agnieszka'];
const newTab = tab.map(function (el) {
    return el.toUpperCase()
}).filter( function (el) {
    return el[el.length - 1].toUpperCase() === "A"  
}).map(function (el) {
  return el + '!';  
}).forEach(function (el) {
    console.log(el);
})
/*
3
ANIA!
AGNIESZKA!
*/

// --------------------------------------------
// Łańcuchowanie metod - uproszczenie do funkcji
// --------------------------------------------
const tab = ['Marcin', 'Ania', 'Agnieszka'];
const upper = function (el) {
    return el.toUpperCase();
}
const checkIsWoman = function (el) {
    return el.substr(-1).toUpperCase() === 'A'; // test
}
const addExclamationMark = function (el) {
    return el + "!"
}
const newTab = tab.map(upper).filter(checkIsWoman).map(addExclamationMark);
console.log(newTab); // ['ANIA!', 'AGNIESZKA!']

// --------------------------------------------
// Łańcuchowanie metod - hardcore
// --------------------------------------------

const tab = ['Marcin', 'Ania', 'Agnieszka'];
const upper = el => el.toUpperCase();
const checkIsWoman = el => el.substr(-1).toUpperCase() === 'A';
const addExclamationMark = el => el + "!";
const newTab = tab.map(upper).filter(checkIsWoman).map(addExclamationMark);

console.log(newTab); // ['ANIA!', 'AGNIESZKA!']

const tab = [
    { name: "Monika", gender: "w" },
    { name: "Agata", gender: "w" },
    { name: "Marcin", gender: "m" },
    { name: "Patrycja", gender: "w" },
]
const index = tab.findIndex(function (el){
    return el.gender == "m"
})

console.log("Index pasującego elementu: ", index); // Index pasującego elementu:  2
console.log("Psujący element: ", tab[index]); //Psujący element: { name: "Marcin", gender: "m" }

var tab2 = tab.splice(index,1);
console.log(tab2); // { name: "Marcin", gender: "m" }
console.log(tab); // { name: "Monika", gender: "w" }, { name: "Agata", gender: "w" }, { name: "Patrycja", gender: "w" }
