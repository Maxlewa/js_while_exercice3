// EXO 1

let tab = ["alex", "jamila", "béné", "louise", "saliou", "maxence", "achraf", "adame", "dawid"]

for (let i = 0; i < 9; i++) {
    console.log(`Bonjour ${tab[i]}`);  
}

// EXO 2

let fruits = ["orange", "fraise", "banane", "kiwi", "pamplemousse", "pastèque"]

while (fruits.length > 0) {
    fruits.pop();
}

console.log(fruits);

// EXO 3

let panierLegumes = ["poireau", "épinard", "navet", "betterave"]
let longueur = panierLegumes.length
let caisseLegumes = []

// while (longueur > 0) {
//     panierLegumes.push(caisselegumes);
// }

for (let i = 0; i < longueur; i++) {
    caisseLegumes.push(panierLegumes[i])
}

console.log(panierLegumes);
console.log(caisseLegumes);