const arr = [48, -2, 6, 12, 0, -4]

//Exercice merge 
// Tuto trouvé sur internet

function merge(left, right) {
    let sortedArr = [] 

    while (left.length && right.length) {
      // Insertion du plus petit élèment dans le sortedarr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift())
      } else {
        sortedArr.push(right.shift())
      }
    }
    // Use spread operators to create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right]
  }


  function mergeSort(arr) {
    //Cas de base
    if (arr.length <= 1) return arr

    let mid = Math.floor(arr.length / 2)
    
    // recursivité
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right)
  }

  console.log(mergeSort(arr))
