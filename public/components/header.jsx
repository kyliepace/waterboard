var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Link = require('react-router').Link;

var Header = function(props){
	return(
	    <header>
	      	<section>
	      	<div>
	      		<Link to='/'><h3 style={{'textAlign': 'left'}}>State Water Resources Control Board</h3></Link>
	      	</div>
	      	<div>
	      		<h3 style={{'textAlign': 'right'}}>California Environmental Protection Agency</h3>
	      	</div>
	      	</section> 
	    </header>
	)
};
	
module.exports = Header;