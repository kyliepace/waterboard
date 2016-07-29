var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var Selection = function(props){
	return(
		<div className='question'>
			<h4>{props.line}</h4>
			<Row className='options'>
				<div className='option'>
					<h5>{props.option1}</h5>
				</div>
				<div className='option'>
					<h5>{props.option2}</h5>
				</div>
			</Row>
		</div>
	);		
};

module.exports = Selection;
