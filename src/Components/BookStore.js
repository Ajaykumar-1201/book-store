import React, { useState, useEffect } from "react";

const BookStore = () => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=harry+potter"
      );
      const result = await data.json();
      setBooks(result);
    };
    fetchData();
  }, []);


  return <div>
    <h2>Harry Potter Data</h2>
    {books && (
        <ul>
            {books.items.map((item) => (
                <li key={item.id}>{item.volumeInfo.title}  </li>
            ))}
        </ul>
    )}
  </div>;
};

export default BookStore;
