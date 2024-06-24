document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
  
    checkBtn.addEventListener('click', function() {
      const inputValue = textInput.value.trim();
  
      if (inputValue === '') {
        alert('Please input a value');
        return;
      }
  
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
  