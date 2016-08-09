var React = require('react');
var Row = require('react-bootstrap').Row;
var FormGroup = require('react-bootstrap').FormGroup;
var ControlLabel = require('react-bootstrap').ControlLabel;
var FormControl = require('react-bootstrap').FormControl;
var HelpBlock = require('react-bootstrap').HelpBlock;
var Overlay = require('react-bootstrap').Overlay;
var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
var Popover = require('react-bootstrap').Popover;
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;

var FAQ = function(props){
	//if the question is multiple choice, create a box for each option
	if(props.question.selection){
		var options = [];
		for (var i=0; i<props.question.selection.length; i++){
			options.push(
				<Button className={props.question.selected[i]? "selected":'option'} type='submit' id={i} onClick={props.handleClick}>
					<h3 id={i} onClick={props.handleClick}>{props.question.selection[i]}</h3>
				</Button>
			)
		}
	}
	
	
	return(
	<form onSubmit={props.onSubmit}>
		
		<FormGroup className={'selector'}>

			<h3>{props.question.line}</h3>
			<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.question.popover}</Popover>}>
				<Button className='popoverButton'><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
			</OverlayTrigger>

			<Row className='options'>
				{options}
			</Row>
		</FormGroup>

		
		
		
	</form>
	);		
};

module.exports = Question;
