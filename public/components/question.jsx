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
	//if the question is multiple choice, create a box for each option
	if(props.selection){
		var options = [];
		for (var i=0; i<props.selection.length; i++){
			options.push(
				<Button className={"option"} type='button' id={[props.questionId, i]} onClick={props.handleClick}>
					<h3>{props.selection[i]}</h3>
				</Button>
			)
		}
	}
	
	return(
	<div>
		<FormGroup className={props.input ? "":"hidden"}> 
			<ButtonToolbar className='flex'>
				<FormControl placeholder={props.line} className='input' type='text' onChange={props.handleChange}/>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.popover}</Popover>}>
				<Button className='button'><span className='glyphicon glyphicon-question-sign' id={props.questionId} aria-hidden='true' ></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			<FormControl.Feedback />
		</FormGroup>

		<FormGroup className={props.selection ? 'selector': 'hidden'}>
			<ButtonToolbar className='flex'>
				<h4>{props.line}</h4>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.popover}</Popover>}>
					<Button className='button'><span className='glyphicon glyphicon-question-sign' id={props.questionId} aria-hidden='true' ></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			<Row className='options'>
				{options}
			</Row>
		</FormGroup>
	</div>
	);		
};

module.exports = Question;
