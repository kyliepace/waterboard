var React = require('react');
var Row = require('react-bootstrap').Row;

var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var Overlay = require('react-bootstrap').Overlay;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

//create a component with a popover and an input bar
var Question = function(props){
	if(props.selection){
		var options = props.selection.map(function(choice){
			return(
				<div className='option'>
						<h5>{choice}</h5>
				</div>
			)
		}); //for selection-type questions
	}
	
	return(
	<div>
		<FormGroup className={props.input ? "":"hidden"}>
			<ButtonToolbar className='flex'>
				<FormControl placeholder={props.line} className='input' type='text' onChange={props.handleChange}/>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.popover}</Popover>}>
				<Button className='button'><span className='glyphicon glyphicon-question-sign' id={props.questionId} aria-hidden='true' onClick={props.handleClick}></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			<FormControl.Feedback />
		</FormGroup>

		<div className={props.selection ? '': 'hidden'}>
			<h4>{props.line}</h4>
			<Row className='options'>
				{options}
			</Row>
		</div>
	</div>
	);		
};

module.exports = Question;
