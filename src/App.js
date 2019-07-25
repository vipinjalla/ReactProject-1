import React from 'react'
import {Route} from 'react-router-dom';
import './App.css'
import MyBooks from './navigations/MyBooks';
import SearchBooks from './navigations/SearchBooks';

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
            	<Route path='/' component={MyBooks} exact>
             	</Route>
            	<Route path='/search' component={SearchBooks}>
             	</Route>
            </div>
        )
    }
}

export default BooksApp
