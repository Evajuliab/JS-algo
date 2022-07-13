// Exercice 1
const arr = [10, 15, 3, 7]

function Sum(k, arr) {
for(let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j ++) {
        // comparaison de la somme des nombres entre eux
        if (arr[i] + arr[j] == k ) {
            return true;
        }
     
        }
    }

return false;
};
console.log("Exercice 1 :")
console.log(Sum(17, arr));

// Exercice 2

const arr2 = [3, 7, 8, 3, 6, 1]

function Building(arr2) {
    let count = 1;
    for(let i = 0; i < arr2.length - 1; i++) {
        let view = true; 
        for (let j = i + 1; j < arr2.length - i; j ++) {
            if (arr2[i] < arr2[j]) 
            view = false; 
    
        }
        if (view = true) {count++} else {console.log("aucune vue à l'ouest")}
    }
        return count;
    }

    console.log("Exercice 2 :")
    console.log(Building(arr2))

//Exercice 3

function Sum2(k, arr) {

  // Tri des elements 
  arr.sort();
      // comparaison de 2 elements dans l'array trié
    
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if (arr[i] + arr[j] == k)
            return true;
        else if (arr[i] + arr[j] < k)
            i++;
        else 
            j --;
    }
    return false;
}
  
console.log("Exercice 3 :")
console.log(Sum2(17, arr))

// Exercice 4


function Building2(arr2) {
    let view = 1
    let height = arr2[arr2.length-1]
    for(let i = arr2.length - 2; i > 0; i --) {
        if(arr2[i] > height) { arr2[i] = height
        view ++;
    }
       
    }
    return view;
}

console.log(Building2(arr2))