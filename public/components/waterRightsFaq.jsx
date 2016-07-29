var React = require('react');
var Col = require('react-bootstrap').Col;
var Selection = require('./selection.jsx');
var Button = require('react-bootstrap').Button;

var WaterRightsFaq = function(props){
	return(
	    <section>
	    	<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
	    		<h4>What is a water right and do I need one?</h4>
	    	</Col>
	    	
    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
    			<Selection line={'A water right is required before you can use water from streams, and most springs, in California.'} option1={'ok but'} option2={'or what about'}/>
    		</Col>

    		
	    </section>
	);
};
	

module.exports = WaterRightsFaq;