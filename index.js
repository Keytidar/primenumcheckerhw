function isPrimeNum(i) {
  
  if (!i) {
    return "You cancelled";
  }

  i = Number(i)
  
  if (isNaN(i)) {
    return "Not a number";
  }

    if (!Number.isInteger(i)) {
    return "Not a whole number"
  }

  if (i <= 1) {
    return "Too small number";
  }


  else {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        return "Not a prime number"
      }
    } 
  }
  return "Prime number";
}

setTimeout(() => {
  alert(isPrimeNum(prompt('Enter a whole number please')));
}, 10);