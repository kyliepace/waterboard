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
var FieldGroup = require('react-bootstrap').FieldGroup;

var Question = function(props){
	//if the question is multiple choice, create a box for each option
	if(props.question.selection){
		var options = [];
		for (var i = 0; i < props.question.selection.length; i++){
			options.push(
				<Button className={props.question.selected[i]? "selected":'option'} type='button' id={i} onClick={props.handleClick}>
					<h3 id={i} onClick={props.handleClick}>{props.question.selection[i]}</h3>
				</Button>
			)
		}
	}
	//create an array of the input labels, if that question should have them
	var labels = [];
	if(props.question.labels){
		for(var k = 0; k < props.question.input.length; k++){
			labels.push(props.question.labels[k]);
		}
	}
	//if the question has a form text input, create a row for each input and popover
	if(props.question.input){
		var inputs = [];
		for (var n = 0; n < props.question.input.length; n++){
			inputs.push(
				<div>
					<a className={props.question.link[n] ? '':'hidden'} target='_blank' href={props.question.link}>
						<ControlLabel className={props.question.labels? '':'hidden'}>{labels[n]}</ControlLabel>
					</a>
					<FormControl placeholder={props.answer[n] ? props.answer[n] : props.question.input[n]} name={n} className='input' type='text' onChange={props.handleChange}/>
					
					<HelpBlock className={props.question.error[n]? '': 'hidden'}>{props.question.error[n]}</HelpBlock>
				</div>
			);
		}	
	}

	if(props.question.changeSourceCounter===true && props.user.numSources>=2){
		var dropdown = true;
	}

	//if this question should let the user change which water source they are reporting
	if(dropdown === true){ //only do this for the water source question
		var dropdowns = [];
		for (var p = props.user.numSources[0]; p > 0; p++){ 
			dropdowns.push(
				<option value={p - 1} id={p - 1}>{p}</option> //give a dropdown option up to the number of sources
			)
		}
	}
	return(
	<form onSubmit={props.onSubmit}>
		<div className={props.question.changeSourceCounter ? 'options':'hidden'}>
			<h4>This is for water source number: </h4>
			<FormControl componentClass='select' onChange={props.changeSource} placeholder='' className={'dropdown'}>
				{dropdowns}
			</FormControl>
		</div>

		<h3 className='line'>{props.question.line}</h3>

		<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>{props.question.popover}</Popover>}>
			<Button className='popoverButton'><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
		</OverlayTrigger>

		<FormGroup className={props.question.input ? '':'hidden'} validationState={props.question.validationState}> 
			{inputs}
		</FormGroup>

		<FormGroup className={props.question.selection ? 'options': 'hidden'}>
			{options}
		</FormGroup>
		<Button className='button' id='submitButton' disabled={props.question.disabled} type='submit'>Next<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>	
	</form>
	);		
};

module.exports = Question;