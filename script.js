function convertToRoman() {
  const num = parseInt(document.getElementById('numberInput').value);
  const resultEl = document.getElementById('result');

  if (isNaN(num) || num < 0 || num > 100000) {
    resultEl.textContent = 'Please enter a number from 0 to 100000.';
    return;
  }

  if (num === 0) {
    resultEl.textContent = 'N'; // Historical representation for zero
    return;
  }

  const romanMap = [
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
    ['I', 1],
  ];

  let remaining = num;
  let result = '';

  // Add thousands manually for numbers over 3999
  while (remaining >= 1000) {
    result += 'M';
    remaining -= 1000;
  }

  for (const [symbol, value] of romanMap) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  resultEl.textContent = result.toUpperCase();
}
