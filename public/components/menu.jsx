var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Menu = function(props){
	return(
	    <section>
	    	<Row >
	    		<Col xs={10} md={4} xsOffset={1} mdOffset={2}>
	    			<h3>Respond to Info Order</h3>
	    		</Col>
	    		<Col xs={10} md={4} xsOffset={1} mdOffset={2}>
	    			<h3>Claim or Apply for Water Right</h3>
	    		</Col>
	    	</Row>


	    </section>
	)
};
	

module.exports = Menu;