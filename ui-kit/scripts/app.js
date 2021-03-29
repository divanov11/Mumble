// Importing Styles
import "../styles/app.scss";

console.log("🔥 It's working!");

// Webpack Config
if (module.hot) {
  module.hot.accept();
}
