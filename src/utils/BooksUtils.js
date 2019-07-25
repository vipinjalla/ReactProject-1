export const getMappedBooksData = (books = [], referenceBooks = []) =>{
        const mappedBooks = [];
  		if (Array.isArray(books)) {          
            books.forEach(bookFromAPI => {
                const book = {};
                book.title = bookFromAPI.title;
                book.authors = bookFromAPI.authors;
                book.imageLink = (bookFromAPI && bookFromAPI.imageLinks && (bookFromAPI.imageLinks.thumbnail || bookFromAPI.imageLinks.smallThumbnail)) || '';
                book.id = bookFromAPI.id;
              
              	let bookShelf = bookFromAPI.shelf;
              	const matchedReferenceBook = referenceBooks.find(referenceBook => book.id === referenceBook.id);
              	if (matchedReferenceBook) {
                	book.shelf = matchedReferenceBook.shelf;
                } else {
					book.shelf = bookShelf;              
                }
              	mappedBooks.push(book);
            });
        }
        return mappedBooks;
    }

export const getUpdatedBooks = (books, bookToBeUpdated, newShelf) => {
	const updatedBooks = books.filter(currentBook => currentBook.id !== bookToBeUpdated.id);
	bookToBeUpdated.shelf = newShelf;
	updatedBooks.push(bookToBeUpdated);
	return updatedBooks;
}
