// JavaScript to handle the copy button functionality
const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
   button.addEventListener('click', () => {
      const codeBlock = button.previousElementSibling.querySelector('code');
      copyCodeToClipboard(codeBlock.innerText);
      button.textContent = 'Copied!';
      setTimeout(() => {
         button.textContent = 'Copy';
      }, 2000); // Reset the button text after 2 seconds
   });
});

function copyCodeToClipboard(code) {
   const textArea = document.createElement('textarea');
   textArea.value = code;
   document.body.appendChild(textArea);
   textArea.select();
   document.execCommand('copy');
   document.body.removeChild(textArea);
}
