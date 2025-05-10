function convertToRoman() {
  const num = parseInt(document.getElementById('numberInput').value);
  const resultEl = document.getElementById('result');

  if (isNaN(num) || num < 1 || num > 100000) {
    resultEl.textContent = 'Please enter a number between 1 and 100000.';
    return;
  }

  const romanNumerals = [
    ['ↈ', 100000],
    ['ↇ', 50000],
    ['ↂ', 10000],
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';
  let number = num;

  for (const [symbol, value] of romanNumerals) {
    while (number >= value) {
      result += symbol;
      number -= value;
    }
  }

  resultEl.textContent = result;
}
