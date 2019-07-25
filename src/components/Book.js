import React, { Component } from 'react';
import {SHELF_TYPE} from '../config';

export default class Book extends Component {
  
  	changeShelfHanlder(e) {
		const {book={}, changeShelf} = this.props;
		changeShelf(book, e.target.value);
	}

    renderBookShelfChanger() {
        const {book={}} = this.props;
        const {shelf} = book;
      
        return (
            <div id="shelfSelector" 
          		className="book-shelf-changer" 
  				onChange={(e) => {this.changeShelfHanlder(e)}}>
                <select value={shelf || SHELF_TYPE.none}>
                    <option 
                        key="move" 
                        value="move" 
                        disabled="disabled">
                        Move to...
                    </option>
                    <option 
                        key={SHELF_TYPE.currentlyReading} 
                        value={SHELF_TYPE.currentlyReading} 
                        disabled={shelf === SHELF_TYPE.currentlyReading ? 'disabled' : ''}>
                        Currently Reading
                    </option>
                    <option 
                        key={SHELF_TYPE.wantToRead} 
                        value={SHELF_TYPE.wantToRead}
                        disabled={shelf === SHELF_TYPE.wantToRead ? 'disabled' : ''}>
                        Want to Read
                    </option>
                    <option 
                        key={SHELF_TYPE.read}
                        value={SHELF_TYPE.read}
                        disabled={shelf === SHELF_TYPE.read ? 'disabled' : ''}>
                        Read
                    </option>
                    <option 
                        key={SHELF_TYPE.none}
                        value={SHELF_TYPE.none}
                        disabled={!shelf ? 'disabled' : ''}>
                        None
                    </option>
                </select>
            </div>
        );
    }

    render() {
        const {book={}} = this.props;
        const {imageLink, title, authors = []} = book;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${imageLink}")`}}></div>
                    {this.renderBookShelfChanger()}
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.join(', ')}</div>
            </div>
        );
    }
}