/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchSingleBook } from "../API";
import { useState , useEffect } from "react";
import { checkOutBook } from "../API";
export default function SingleBook ({token}){
  const [ book, setBook] = useState(null);
  const params = useParams();
  const navigate = useNavigate();  
  
  async function getSingleBook () {
    try {
        const nextBook = await fetchSingleBook(params.bookId);
        setBook(nextBook);

    } catch (err) {
        // console.log(err);
        console.log('err');

    }
}
  useEffect(() => {
            getSingleBook()
}, []);

  return (book &&
    <div className="single-book">
        <h3>{book.title}</h3>
        <p>ID #{book.id}</p>
        <p>{book.author}</p>
        <p>Availability: {book.available ? "available" : "checked out"} </p>
        <img className="book-cover-img" src={book.coverimage} alt={`picture of ${book.title}`} />
        < br />
        <button onClick={() => {navigate("/")}}>Back to Home</button>
        {token && book.available? <button onClick={ async () => {
          await checkOutBook(book.id, token)
          await getSingleBook();
          }}> Checkout </button>:null}

        
    </div>
  )

}