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