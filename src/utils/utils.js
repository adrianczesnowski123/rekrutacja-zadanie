// algorytm  obsługuje kody ascii z przedziału: 32 - 126 (małe, duże litery, liczby, znaki interpunkcyjne, spacje)
// the algorithm supports ascii codes in the range: 32 - 126 (lowercase, uppercase letters, numbers, punctuation marks, spaces

//cipher
export function algorithmCipher(text, shift) {
  //tests
  if (!text) throw new Error('Missing argument: text');
  if (!shift) throw new Error('Missing argument: shift');

  let word = '';

  //variable to hold the current character in ascii format
  let x = 0;

  const shiftBy = parseInt(shift);

  //iteration over each character
  for (let i = 0; i < text.length; i++) {
    x = String(text.charCodeAt(i));

    //checking if the character is in the range from 32 to 126
    if (x >= 32 && x <= 126) {
      x = ((x - 32 + shiftBy) % 97) + 32;
    }

    //creating a coded word
    word = word + String.fromCharCode(x);
  }

  return word;
}

//decipher
export function algorithmDecipher(text, shift) {
  //tests
  if (!text) throw new Error('Missing argument: text');
  if (!shift) throw new Error('Missing argument: shift');

  let word = '';

  //variable to hold the current character in ascii format
  let x = 0;

  const shiftBy = parseInt(shift);

  //iteration over each character
  for (let i = 0; i < text.length; i++) {
    x = String(text.charCodeAt(i));

    //checking if the character is in the range from 32 to 126
    if (x >= 32 && x <= 126) {
      x = ((x - 32 - shiftBy) % 97) + 32;
    }

    //creating a decoded word
    word = word + String.fromCharCode(x);
  }

  return word;
}
