import React, { useEffect, useState } from 'react';
import userToken from './Login';
import { checkInBook } from '../API';

const Account = ({token}) => {
  const [userInfo, setUserInfo] = useState(null);
  

  useEffect(() => {
    fetchUserInfo();

  }, []);

  const fetchUserInfo = async () => {
    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`, // Include the user token in the request headers
          
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUserInfo(userData);
      } else {
        console.error('Failed to fetch user information:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user information:', error.message);
    }
  };

  return (
    <div className='account'>
      <h2>User Account Information</h2>
      {userInfo ? (
        <div>
          <p>
            Name: {userInfo.firstname} {userInfo.lastname}
          </p>
          <p>Email: {userInfo.email}</p>
          
          <h3>Books Checked Out:</h3>
          <ul>
            {userInfo.books.map((book) => (
              <li key={book.id}>{book.title}
              <br />
              <button onClick = { async ()=>  {
                await checkInBook(book.id, token);
                await fetchUserInfo();
              }}>Return Book</button></li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Log in or Create and Account</p>
      )}
    </div>
   
);
};



export default Account;