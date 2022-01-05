// import logo from './logo.svg';
// import './App.css';
import data from "./data";
import Product from "./components/Product";
function App() {
  return (
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
        <div className="row center">
          {data.product.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </main>
      <footer className="row center"> All right reserved </footer>
    </div>
  );
}

export default App;
