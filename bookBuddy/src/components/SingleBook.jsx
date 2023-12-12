/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleBook } from "../API";
import { useState , useEffect } from "react";
export default function SingleBook (){
  const [ book, setBook] = useState(null);
  const params = useParams();
  const navigate = useNavigate();  
  useEffect(() => {
    async function getSingleBook () {
        try {
            const nextBook = await fetchSingleBook(params.bookId);
            setBook(nextBook);

        } catch (err) {
            // console.log(err);
            console.log('err');

        }
    }
        getSingleBook();
}, []);
  return (book &&
    <div className="single-book">
        <h3>{book.title}</h3>
        <p>ID #{book.id}</p>
        <p>{book.author}</p>
        <p>Availability: {book.available ? "available" : "checked out"} </p>
        <img className="book-cover-img" src={book.coverimage} alt={`picture of ${book.title}`} />
        <button onClick={() => {navigate("/")}}>Back to Home</button>
        <button onClick={() => {navigate("")}}>Checkout</button>
    </div>
  )
}