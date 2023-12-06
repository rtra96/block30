/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React,{ useEffect, useState} from "react";
import { fetchBooks } from "../API";
import { useNavigate } from "react-router-dom";
export default function AllBooks (){
    const [books, setBooks] =useState([]);
    const navigate = useNavigate ();
    console.log(books);
 useEffect(() => {
        async function getBooks() {
          try {
            const nextBooks = await fetchBooks();
            console.log('API Response:', nextBooks);
      
            setBooks(nextBooks);
          } catch (err) {
            console.error(err);
          }
        }
      
        getBooks();
      }, []);
      
 return (
  <div id="books-container">
    <p>{books.length > 0 ? 'Available Books' : 'No books available'}</p>
      {books.map((book, index) => (
        <div className="book-card" key={index}>
              <img src={book.coverimage} alt={`cover of ${book.title}`} />
              <h1>{book.cover}</h1>
              <button onClick={() => navigate(`/books/${book.id}`)}>See Details</button>
         </div>
  ))}
     </div>
 );
}

