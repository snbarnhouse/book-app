// import logo from './logo.svg';
import './App.css';
import Book from "./Book";
// import Country from './components/country';  
import GoogleBooksSearch from "./GoogleBooksSearch";

function App() {
  return (
    <div className="App">
      <GoogleBooksSearch />
      <main>
        <Book />
      </main>
    <footer>
    📚BookHound was coded by <a href="https://dreamy-visvesvaraya-894128.netlify.app/index.html" target="_blank" rel="noreferrer">Stephanie Barnhouse</a> and is<a href="https://github.com/snbarnhouse/book-app" target="_blank" rel="noreferrer"> open source</a> code💻
    </footer>
    </div>
  );
}

export default App;
