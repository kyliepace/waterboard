var React = require('react');

var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Overlay = require('react-bootstrap').Overlay;
var Popover = require('react-bootstrap').Popover;

var Question = function(props){
	return(
		<FormGroup>
			<ControlLabel>{props.line}</ControlLabel>
			<span className='glyphicon glyphicon-question-sign' aria-hidden='true' handleClick={props.handleClick}></span>
			<Overlay show={props.show} target={span} placement="top" containerPadding={10}>
				<Popover id='popover'>{props.popover}</Popover>
			</Overlay>
			<FormControl className='input' type='text' onChange={props.handleChange}/>
			<FormControl.Feedback />
		</FormGroup>
	);		
};

module.exports = Question;
