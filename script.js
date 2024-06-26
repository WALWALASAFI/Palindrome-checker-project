document.addEventListener('DOMContentLoaded', () => {
  const textInput = document.getElementById('text-input');
  const checkBtn = document.getElementById('check-btn');
  const resultDiv = document.getElementById('result');

  checkBtn.addEventListener('click', () => {
    const inputValue = textInput.value.trim();
    const isPalindrome = checkPalindrome(inputValue);

    if (isPalindrome) {
      resultDiv.textContent = `${inputValue} is a palindrome`;
    } else {
      resultDiv.textContent = `${inputValue} is not a palindrome`;
    }
  });

  function checkPalindrome(str) {
    const alphanumericStr = str.replace(/[\W_]/g, '').toLowerCase();
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
  }
});
