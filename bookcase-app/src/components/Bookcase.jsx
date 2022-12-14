import Book from './Book';

export const Bookcase = ({books}) => {

  return (
    <div>
        <h2>{books.length}</h2>
        {books.map((book) => book.volumeInfo.title) }
    </div>
  );
};