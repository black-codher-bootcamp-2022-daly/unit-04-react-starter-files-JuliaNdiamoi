import React, { useState } from "react";
import Book from "./components/Book";
import Booklist from "./components/Booklist";
import {Bookcase} from "./components/Bookcase";
import { Search } from "./components/Search";
import data from "./models/books.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  function addBook(book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);

    console.log({ newBasket, basket });

  }

  return (
    <>
      <Routes>
        <Route
          path="/Search"
          element={
            <Booklist>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                handleSubmit={findBooks}
              />
              {books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  handleClick={() => addBook(book)}
                />
              ))}
            </Booklist>
          }
        ></Route>
        <Route path="/AboutUs" element={<h1>About us</h1>}></Route>
        <Route path="/Bookcase" element={<Bookcase books={basket}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
