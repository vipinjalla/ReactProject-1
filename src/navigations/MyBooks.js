import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getAll, update } from '../BooksAPI';
import {SHELF_TYPE} from '../config';
import BookShelf from '../components/BookShelf';
import {getMappedBooksData, getUpdatedBooks} from '../utils/BooksUtils';

export default class MyBooks extends Component {
   state = {
        books: []
    }

    componentDidMount() {
    	this.fetchData();
    }

	changeShelfHandler = (bookToBeUpdated, newShelf) => {
    	update(bookToBeUpdated, newShelf).then(() => {
        	let {books=[]} = this.state;          
          	this.setState({books: getUpdatedBooks(books, bookToBeUpdated, newShelf)});
        });    	
    }

	fetchData() {
        getAll().then(data => this.setState({books: getMappedBooksData(data)}));
    }

    renderCurrentlyReadingShelf() {
        const {books = []} = this.state;
        const currentlyReadingBooks = books.filter(book=> book.shelf === SHELF_TYPE.currentlyReading);
        return (
            <BookShelf 
                key={SHELF_TYPE.currentlyReading} 
                title="Currently Reading" 
                books={currentlyReadingBooks}
				changeShelf={this.changeShelfHandler}>
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
                books={wantToReadBooks}
				changeShelf={this.changeShelfHandler}>
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
                books={readBooks}
				changeShelf={this.changeShelfHandler}>
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