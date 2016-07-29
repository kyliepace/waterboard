var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;

var InfoOrder = function(props){
	return(
	    <section>
	    	<h4>Info Order Form</h4>
    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
    			<form className='question'>
	    			<Question line={'APN/ID Code'} />
	    			<Question line={'Password'} />
	    			<Button type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
    			</form>
    		</Col>
	    </section>
	)
};
	

module.exports = InfoOrder;