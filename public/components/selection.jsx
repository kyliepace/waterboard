var React = require('react');
var Col = require('react-bootstrap').Col;
var Row = require('react-bootstrap').Row;

var Selection = function(props){
	return(
		<div className='question'>
			<h4>{props.line}</h4>
			<Row className='options'>
				<div className='option'>
					<p>{props.option1}</p>
				</div>
				<div className='option'>
					<p>{props.option2}</p>
				</div>
			</Row>
		</div>
	);		
};

module.exports = Selection;
