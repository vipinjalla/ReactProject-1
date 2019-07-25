import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css'
import MyBooks from './navigations/MyBooks';
import SearchBooks from './navigations/SearchBooks';
import ErrorPage from './navigations/ErrorPage';

class BooksApp extends React.Component {
    render() {
        return (
            <div className="app">
				<Router>         
          			<Switch>
                        <Route path='/' component={MyBooks} exact>
                        </Route>
                        <Route path='/search' component={SearchBooks} exact>
                        </Route>
                        <Route component={ErrorPage}>
                        </Route>
					</Switch>
				</Router>
            </div>
        )
    }
}

export default BooksApp
