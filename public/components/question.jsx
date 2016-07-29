var React = require('react');

var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;

var Question = function(props){
	return(
		<FormGroup>
			<ControlLabel>{props.line}</ControlLabel>
			<FormControl className='input' type='text' value={props.value} onChange={props.handleChange}/>
			<FormControl.Feedback />
		</FormGroup>
	
	);		
};

module.exports = Question;
