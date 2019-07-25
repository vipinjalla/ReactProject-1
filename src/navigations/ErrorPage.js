import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class ErrorPage extends Component {
	render() {
    	return (
        	<div className="errorContainer">
          		<div className="errorTitle">
          			Page Not Found 
         		</div>
          		<div className="errorLink">
          			Go back to <Link to="/"> Home </Link>
         		</div>
          	</div>
        );
    }
}