var React = require('react');
var Col = require('react-bootstrap').Col;
var Selection = require('./selection.jsx');
var Button = require('react-bootstrap').Button;

var InfoOrderFaq = function(props){
	return(
	    <section>

	    	<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
	    		<h4>What is the Info Order?</h4>
	    	</Col>
	    	
    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
    			<Selection line={'The Info Order is...'} option1={'ok but'} option2={'or what about'}/>
    		</Col>

    		
	    </section>
	);
};
	

module.exports = InfoOrderFaq;