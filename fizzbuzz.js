var numeros = 100;
for (let i = 0; i <= numeros; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) {
      console.log(i + "fizzbuzz");
    } else {
      console.log(i + "fizz");
    }
  } else if (i % 5 == 0) {
    console.log(i + "buzz");
  } else {
    console.log(i);
  }
}
