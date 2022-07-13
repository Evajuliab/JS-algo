const arr = [48, -2, 6, 12, 0, -4]

//Exercice merge


function merge(left, right) {
    let sortedArr = []; 
  
    while (left.length && right.length) {
      // insertion du plus petit element dans le sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }

  }


  function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return (mergeSort(left), mergeSort(right));
  }

 console.log(merge(arr))