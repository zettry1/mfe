import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./component/MarketingApp";
import Header from "./component/Header";
import { StylesProvider } from "@material-ui/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "cont",
});
function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
