// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Ecommerce
            </a>
          </div>
          <div>
            <a href="/cart"> Cart </a>
            <a href="/sigin"> Sign In </a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
        <footer className="row center"> All right reserved </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
