const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";


export const fetchBooks = async () => {
  try {
    const rsp = await fetch(`${API_URL}/books`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!rsp.ok) {
      throw new Error('Failed to fetch books');
    }

    const json = await rsp.json();
    return json.books; 
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const fetchSingleBook = async (bookId) => {
    try {
        const rsp = await fetch(`${API_URL}/books/${bookId}`);
        const json = await rsp.json();
        console.log(json);
        return json.book;
    }catch (err){
        console.log(err);


    }
};

// export const loginUser = async (userObj) => {
//   try {
//     const rsp = await fetch(`${API_URL}/users/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body
//       )
//     })
    
//   } catch (error) {
    
//   }
// }
