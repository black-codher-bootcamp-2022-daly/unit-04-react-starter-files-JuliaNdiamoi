import React, { useState } from "react";

import Book from "./components/Book";
import data from "./models/books.json";

function App() {
  // const books = data
  const [books] = useState(data);

  return <div>
  <h1>Tobia's library</h1>
  {books.map((book) => <Book key={book.id} book={book} />)}
  </div>
}

export default App;