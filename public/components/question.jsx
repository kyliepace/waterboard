var React = require('react');

var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Overlay = require('react-bootstrap').Overlay;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

var overlay = (
	<Popover id='popover-trigger-click'></Popover>
	);
	

var Question = function(props){
	return(
		<FormGroup className='question'>
			<ButtonToolbar className='questionLine'>
				<FormControl placeholder={props.line} className='input' type='text' onChange={props.handleChange}/>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.popover}</Popover>}>
				<Button><span className='glyphicon glyphicon-question-sign' id={props.questionId} aria-hidden='true' onClick={props.handleClick}></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			
			<FormControl.Feedback />
		</FormGroup>
	);		
};

module.exports = Question;


// <Overlay target={props.target} show={props.show} placement="right" container={this} containerPadding={10}>
					
// 				</Overlay>
// <ControlLabel>{props.line}</ControlLabel>