import { Fragment } from "react";
import Header from "./components/header/Header";
import ProductList from "./components/productList/ProductList";


function App() {
  return (
    <Fragment>
       <Header/>
       <ProductList/>
    </Fragment>
  );
}

export default App;
