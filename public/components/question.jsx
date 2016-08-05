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

var Question = function(props){
	//if the question is multiple choice, create a box for each option
	if(props.question.selection){
		var options = [];
		for (var i=0; i<props.question.selection.length; i++){
			options.push(
				<Button className={props.question.selected[i]? "selected":'option'} type='button' id={i} onClick={props.handleClick}>
					<h3 id={i} onClick={props.handleClick}>{props.question.selection[i]}</h3>
				</Button>
			)
		}
	}
	//if the question has a form text input, create a row for each input and popover
	if(props.question.input){
		var inputs = [];
		for (var n=0; n<props.question.input.length; n++){
			inputs.push(
				<div>
					<ButtonToolbar className='flex'>
						<FormControl placeholder={props.answer[n] ? props.answer[n] : props.question.input[n]} name={n} className='input' type='text' onChange={props.handleChange}/>
						<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.question.popover[n]}</Popover>}>
							<Button className={'popoverButton'}><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
						</OverlayTrigger>
					</ButtonToolbar>
					<HelpBlock className={props.question.error[n]? '': 'hidden'}>{props.question.error[n]}</HelpBlock>
				</div>
			);
		}	
	}
	
	return(
	<form onSubmit={props.onSubmit}>
		<FormGroup className={props.question.input ? "":"hidden"}> 
			<h3>{props.question.line}</h3>
			<h3 className={props.question.link ? "":"hidden"}><a target='_blank' href={props.question.link}>Please use this mapping tool 
			to find the well coordinates if unknown</a></h3>
			{inputs}
		</FormGroup>

		<FormGroup className={props.question.selection ? 'selector': 'hidden'}>
			
				<h3>{props.question.line}</h3>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.question.popover}</Popover>}>
					<Button className='popoverButton'><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
				</OverlayTrigger>
			
			<Row className='options'>
				{options}
			</Row>
		</FormGroup>

		
		<Button className='button' id='submitButton' disabled={props.disabled} type='submit'>Next<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
		
	</form>
	);		
};

module.exports = Question;
