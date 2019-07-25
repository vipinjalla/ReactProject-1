export const getMappedBooksData = (data = []) =>{
        const books = [];
  		if (Array.isArray(data)) {          
            data.forEach(bookFromAPI => {
                const book = {};
                book.title = bookFromAPI.title;
                book.shelf = bookFromAPI.shelf;
                book.authors = bookFromAPI.authors;
                book.imageLink = (bookFromAPI && bookFromAPI.imageLinks && (bookFromAPI.imageLinks.thumbnail || bookFromAPI.imageLinks.smallThumbnail)) || '';
                book.id = bookFromAPI.id;
                books.push(book);
            });
        }
        return books;
    }

export const getUpdatedBooks = (books, bookToBeUpdated, newShelf) => {
	const updatedBooks = books.filter(currentBook => currentBook.id !== bookToBeUpdated.id);
	bookToBeUpdated.shelf = newShelf;
	updatedBooks.push(bookToBeUpdated);
	return updatedBooks;
}
