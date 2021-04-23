export function algorithmCipher(text, shift) {
  let word = '';
  let x = 0;
  const shiftBy = parseInt(shift);

  for (let i = 0; i < text.length; i++) {
    x = String(text.charCodeAt(i));

    if (x >= 32 && x <= 126) {
      x = ((x - 32 + shiftBy) % 97) + 32;
    }

    word = word + String.fromCharCode(x);
  }

  return word;
}

export function algorithmDecipher(text, shift) {
  let word = '';
  let x = 0;
  const shiftBy = parseInt(shift);

  for (let i = 0; i < text.length; i++) {
    x = String(text.charCodeAt(i));

    if (x >= 32 && x <= 126) {
      x = ((x - 32 - shiftBy) % 97) + 32;
    }

    word = word + String.fromCharCode(x);
  }

  return word;
}
