import React, { Component } from 'react';
import { getAll } from '../BooksAPI';
import BookShelf from '../components/BookShelf';
import {SHELF_TYPE} from '../config';
import {Link} from 'react-router-dom';

export default class MyBooks extends Component {
   state = {
        books: []
    }

    componentDidMount() {
        getAll().then(data => this.mapBooksData(data));
    }

    mapBooksData(data = []) {
        const books = [];
        data.forEach(bookFromAPI => {
            const book = {};
            book.title = bookFromAPI.title;
            book.shelf = bookFromAPI.shelf;
            book.authors = bookFromAPI.authors;
            book.imageLink = bookFromAPI.imageLinks.thumbnail;
            books.push(book);
        });
        this.setState({books});
    }

    renderCurrentlyReadingShelf() {
        const {books = []} = this.state;
        const currentlyReadingBooks = books.filter(book=> book.shelf === SHELF_TYPE.currentlyReading);
        return (
            <BookShelf 
                key={SHELF_TYPE.currentlyReading} 
                title="Currently Reading" 
                books={currentlyReadingBooks}>
            </BookShelf>
        );
    }

    renderWantToReadBooks() {
        const {books = []} = this.state;
        const wantToReadBooks = books.filter(book=> book.shelf === SHELF_TYPE.wantToRead);
        return (
            <BookShelf 
                key={SHELF_TYPE.wantToRead} 
                title="Want to read" 
                books={wantToReadBooks}>
            </BookShelf>
        );
    }

    renderReadBooks() {
        const {books = []} = this.state;
        const readBooks = books.filter(book=> book.shelf === SHELF_TYPE.read);
        return (
            <BookShelf 
                key={SHELF_TYPE.read}
                title="Read" 
                books={readBooks}>
            </BookShelf>
            );
    }

 	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
            	    <h1>MyReads</h1>
             	</div>
                <div className="list-books-content">
                    <div>
                        {this.renderCurrentlyReadingShelf()}
                        {this.renderWantToReadBooks()}
                        {this.renderReadBooks()}
                    </div>
                </div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
            </div>
        );
    }
}