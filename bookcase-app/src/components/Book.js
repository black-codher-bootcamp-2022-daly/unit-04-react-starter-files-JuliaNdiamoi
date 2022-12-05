import React from "react";
import PropTypes from "prop-types";

function Book({book}) {
  const { title } = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  return (
    <div>
      <h3>{title}</h3>
      {retailPrice && retailPrice.amount < 3 ? "Great deal" : "Best Seller"}
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};

export default Book;