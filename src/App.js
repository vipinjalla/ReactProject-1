import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { getAll } from './BooksAPI';
import BookShelf from './components/BookShelf';
import {SHELF_TYPE} from './config';

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
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
            <div className="app">
                {this.state.showSearchPage ? (
                    <div className="search-books">
                        <div className="search-books-bar">
                            <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                            <div className="search-books-input-wrapper">
                                {/*
                                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                    You can find these search terms here:
                                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                    you don't find a specific author or title. Every search is limited by search terms.
                                */}
                                <input type="text" placeholder="Search by title or author" />

                            </div>
                        </div>
                        <div className="search-books-results">
                            <ol className="books-grid"></ol>
                        </div>
                    </div>
                ) : (
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
                                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default BooksApp
