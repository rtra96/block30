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

export const checkOutBook = async (bookId, token) => {
  try {
    const rsp = await fetch(`${API_URL}/books/${bookId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`,
      },
      body: JSON.stringify({
        available: false,
      })
    });
    const json = rsp.json();
    return json;
    
  } catch (error) {
    
  }
}

export const checkInBook = async (bookId, token) => {
  try {
    const rsp = await fetch(`${API_URL}/reservations/${bookId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        Authorization : `Bearer ${token}`,
      },
    });
    const json = rsp.json();
    return json;
    
  } catch (error) {
   console.log(error); 
  }
}