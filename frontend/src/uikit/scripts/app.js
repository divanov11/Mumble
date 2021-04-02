// Invoke Functions Call on Document Loaded
document.addEventListener('DOMContentLoaded', function () {
  // eslint-disable-next-line no-undef
  hljs.highlightAll();
});

// TODO: Fix with Highlight Js
// const codeBlocks = document.querySelectorAll('.code-header + .highlighter-rouge');
// const copyCodeButtons = document.querySelectorAll('.copy-code-button');

// copyCodeButtons.forEach((copyCodeButton, index) => {
//   const code = codeBlocks[index].innerText;

//   copyCodeButton.addEventListener('click', () => {
//     window.navigator.writeText(code);
//     copyCodeButton.classList.add('copied');

//     setTimeout(() => {
//       copyCodeButton.classList.remove('copied');
//     }, 2000);
//   });
// });
