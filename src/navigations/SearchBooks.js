import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {search, update} from '../BooksAPI';
import Book from '../components/Book';
import {getMappedBooksData, getUpdatedBooks} from '../utils/BooksUtils';

export default class SearchBooks extends Component {
  	state = {
    	books: []
    };

	changeShelfHandler = (bookToBeUpdated, newShelf) => {
    	update(bookToBeUpdated, newShelf).then(() => {
        	let {books=[]} = this.state;          
          	this.setState({books: getUpdatedBooks(books, bookToBeUpdated, newShelf)});
        });    	
    }

	handleSearch(evt) {
    	const query = evt.target.value;
      	search(query.trim(), 100).then(data => this.setState({books: getMappedBooksData(data)}));
    }

    renderBooks() {
        const {books=[]} = this.state;
        return books.map((book, index) => {
            return (
                <li key={index}>
                    <Book 
                        book={book}
						changeShelf={this.changeShelfHandler}>
                    </Book>
                </li>
            );
        });
    }  

	render() {
    	return (
        	<div className="search-books">
            	<div className="search-books-bar">
              	<Link className="close-search" to="/">Close</Link>
				<div className="search-books-input-wrapper">
             		<input type="text" onChange={(evt) => this.handleSearch(evt)} placeholder="Search by title or author" />
              	</div>
				</div>
	            	<div className="search-books-results">
	            	<ol className="books-grid">
          				{this.renderBooks()}
          			</ol>
	            </div>
	        </div>        
        );
    }
}