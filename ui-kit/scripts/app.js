// Importing Styles
import "../styles/app.scss";
import codeblock from "./modules/codeblock";
codeblock();

console.log("🔥 It's working!");

// const codeblocks = document.querySelectorAll(".codeblock");
// codeblocks.forEach((e) => e.setAttribute("disabled", true));

// Webpack Config
if (module.hot) {
  module.hot.accept();
}
