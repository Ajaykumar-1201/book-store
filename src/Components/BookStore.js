import React, { useState, useEffect } from "react";

const BookStore = ({ query }) => {
  const [books, setBooks] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async (query) => {
      if (!query) {
        query = "harry+potter";
      }
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      const result = await data.json();
      setBooks(result);
      setSelectedBook(null);
      console.log(result);
    };
    fetchData(query);
  }, [query]);
  return (
    <div className="book-container">
      {selectedBook != null && (
        <div className="more-info img ">
          <img
            className="tilt"
            src={selectedBook.volumeInfo.imageLinks.thumbnail}
          />
          <div className="information">
            <div className="content">
              <div className="top">
                <p className="title">{selectedBook.volumeInfo.title}</p>
                <p className="published">
                  published On : {selectedBook.volumeInfo.publishedDate}
                </p>
              </div>
              <p className="author">{selectedBook.volumeInfo.authors[0]}</p>
              <p className="summary">{selectedBook.volumeInfo.description}</p>
              <div className="book-info">
                <p>Avg Rating : {selectedBook.volumeInfo.averageRating}</p>
                <p>Rating Count : {selectedBook.volumeInfo.ratingsCount}</p>
                <p>Publisher : {selectedBook.volumeInfo.publisher}</p>
                <p>Language : {selectedBook.volumeInfo.language}</p>
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    const link = selectedBook.accessInfo.webReaderLink;
                    window.open(link, "_blank");
                  }}
                >
                  Now Read!
                </button>
                <button
                  onClick={() => {
                    const link = selectedBook.volumeInfo.previewLink;
                    window.open(link, "_blank");
                  }}
                >
                  More Info!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {books && (
        <div className="books-item">
          {books.items.map((item) => (
            <div className="items" key={item.id}>
              <div className="img">
                <img
                  onClick={() => {
                    setSelectedBook(item);
                  }}
                  src={item.volumeInfo.imageLinks.thumbnail}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookStore;
