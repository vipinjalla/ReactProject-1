import React, { Component } from 'react';
import Book from './Book';

export default class BookShelf extends Component {

    renderBooks() {
        const {books=[], changeShelf} = this.props;
        return books.map((book, index) => {
            return (
                <li key={index}>
                    <Book 
                        book={book}
						changeShelf={changeShelf}>
                    </Book>
                </li>
            );
        });
    }

    renderBooksGrid() {
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.renderBooks()}
                </ol>
            </div>
        );
    }

    render() {
        const {title} = this.props;

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{title}</h2>
                    {this.renderBooksGrid()}
                </div>
            </div>
        );
    }
}