var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var router = require('react-router');
var Link = router.Link;

var Header = function(props){
	return(
	    <header>
	      <Row>
	      	<Col xs={7} xsOffset={1} md={5} mdOffset={1}>
	      		<Link to='/'><h3>State Water Resources Control Board</h3></Link>
	      	</Col>
	      	<Col xs={4} md={5} mdOffset={1}>
	      		<h3>California Environmental Protection Agency</h3>
	      	</Col>
	      </Row>
	    </header>
	)
};
	

module.exports = Header;