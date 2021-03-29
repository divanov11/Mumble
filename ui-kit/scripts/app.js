// Importing Styles
import "../styles/app.scss";
import codeblock from "./modules/codeblock";
codeblock();

// Webpack Config
if (module.hot) {
  module.hot.accept();
}
