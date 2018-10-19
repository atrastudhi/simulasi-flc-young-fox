/**
  **************
  FAKTOR PRIMA
  **************

  Diberikan sebuah function faktorPrima dimana menerima sebuah parameter berupa number.
  Output dari function ini adalah faktor prima dari inputan angka parameter.

  Faktor Prima adalah angka yang habis dibagi oleh angka-angka dasar bilangan prima yaitu
  2, 3, 5 dan 7 (OIYA DAN TENTU SAJA DIRINYA SENDIRI!!)

  contoh 1:
  -----------
  input: 90
  output: 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
  penjelasan:
    90
    /\
  2   45
      /\
    3   15
        /\
      3   5


  contoh 2:
  ----------
  input: 168
  output: 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
  penjelasan:
    168
    /\
  2  84
     /\
    2  42
       /\
      2  21
         /\
        3  7

  contoh 3:
  ----------
  input: 44
  output: 2 pangkat 2, 11 pangkat 1
  penjelasan:
     44
     /\
    2  22
       /\
      2  11

RULES:
  - HANYA BOLEH MENGGUNAKAN LOOPING(FOR/WHILE) DAN CONDITION(IF ELSE)
  - HANYA BOLEH MENGGUNAKAN BUILT IN FUNCTION .push() DAN/ATAU .join() (jika diperlukan)
  - TIDAK BOLEH MENGGUNAKAN FUNCTION ES6
**/

function faktorPrima(num) {
  // your code here
  let result = ''
  let prima = [2]
  for(let i = 3; i < num; i++) {
    let cek = true
    for(let j = 2; j < i; j++) {
      if(i % j === 0) {
        cek = false
      }
    }
    if(cek === true) {
      prima.push(i)
    }
  }
  // console.log(prima)
  let calculate = num
  for(let i = 0; i < prima.length; i++) {
    let counter = 0
    for(let j = 0; j < 10; j++) {
      if(calculate % prima[i] === 0) {
        calculate = calculate / prima[i]
        counter += 1
      }
    }
    if(counter !== 0) {
      result += prima[i] + ' pangkat ' + counter + '. '
    }
  }
  return result
}

console.log(faktorPrima(90)); // 2 pangkat 1, 3 pangkat 2, 5 pangkat 1
console.log(faktorPrima(168)); // 2 pangkat 3, 3 pangkat 1, 7 pangkat 1
console.log(faktorPrima(44)); // 2 pangkat 2, 11 pangkat 1
console.log(faktorPrima(55)); // 5 pangkat 1, 11 pangkat 1
console.log(faktorPrima(26)); // 2 pangkat 1, 13 pangkat 1
console.log(faktorPrima(17)); // 17 pangkat 1