var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Menu = function(props){
	return(
	    <section>
	    	<Row >
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={1}>
	    			<h2>Respond to Info Order</h2>
	    		</Col>
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={2}>
	    			<h2>Claim or Apply for Water Right</h2>
	    		</Col>
	    	</Row>

	    	<Row>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<h2>What is this Info Order all about?</h2>
	    		</Col>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<h2>What is a water right and do I need one?</h2>
	    		</Col>
	    	</Row>

	    </section>
	)
};
	

module.exports = Menu;