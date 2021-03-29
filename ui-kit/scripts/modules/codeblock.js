import hljs from "highlight.js";
import "highlight.js/styles/default.css";
import "highlight.js/styles/night-owl.css";

function addLineNumbersForCode(html) {
  var num = 1;
  html = '<span class="hljs-ln__num" data-num="' + num + '"></span>' + html;
  html = html.replace(/\r\n|\r|\n/g, function (a) {
    num++;
    return a + '<span class="hljs-ln__num" data-num="' + num + '"></span>';
  });
  html = '<span class="hljs-ln__bg"></span>' + html;
  return html;
}

function codeblock() {
  hljs.highlightAll();

  let elements = document.querySelectorAll(".hljs");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].className.indexOf("hljs-ln") == -1) {
      let html = elements[i].innerHTML;
      html = addLineNumbersForCode(html);
      elements[i].innerHTML = html;
      elements[i].classList.add("hljs-ln");
    }
  }
}

export default codeblock;
