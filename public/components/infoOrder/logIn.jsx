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

var LogIn = function(props){
	

		var inputs = [];
		for (var n=0; n<props.question.input.length; n++){
			inputs.push(
				<ButtonToolbar className='flex'>
					<FormControl placeholder={props.answer[n] ? props.answer[n] : props.question.input[n]} id={n} className='input' type='text' onChange={props.handleChange}/>
					<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.question.popover[n]}</Popover>}>
						<Button className={'button'}><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
					</OverlayTrigger>
					<FormControl.Feedback />
				</ButtonToolbar>
			);
		}	

	
	return(
	<form onSubmit={props.onSubmit}>
		<FormGroup className={props.question.input ? "":"hidden"}> 
			<h3>{props.question.line}</h3>
			<h3 className={props.question.link ? "":"hidden"}><a target='_blank' href={props.question.link}>Please use this mapping tool 
			to find the well coordinates if unknown</a></h3>
			{inputs}
		</FormGroup>


		<div className='flex'>
			<Button className='button' onClick={props.onClick} type='button'><span className='glyphicon glyphicon-arrow-left' aria-hidden='left'></span></Button>
			<Button className='button' disabled={props.disabled} type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
		</div>
	</form>
	);		
};

module.exports = LogIn;