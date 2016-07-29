var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;

var WaterRights = function(props){
	return(
	    <section>
	    	
    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
    			<form className='question'>
	    			<Question line={'Application ID'} />
	    			<Question line={'Password'} />
	    			<Button type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
    			</form>
    		</Col>

    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
	    		<h4>Water Rights Reporting</h4>
	    	</Col>
	    </section>
	)
};
	

module.exports = WaterRights;