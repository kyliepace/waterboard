React = require('react');
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

var LogIn = function(props){
	return(
	<form onSubmit={props.onSubmit}>
		<FormGroup> 
			<h3>Please Log In</h3>
			<div>
					<ButtonToolbar className='flex'>
						<FormControl placeholder='APN/ID Code' name={0} className='input' type='text' onChange={props.handleChange}/>
						<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>1</Popover>}>
							<Button className={'popoverButton'}><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
						</OverlayTrigger>
					</ButtonToolbar>
					<HelpBlock className={props.question.error[0]? '': 'hidden'}>{props.question.error[0]}</HelpBlock>
				</div>

				<div>
					<ButtonToolbar className='flex'>
						<FormControl placeholder='Password' name={1} className='input' type='password' onChange={props.handleChange}/>
						<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>1</Popover>}>
							<Button className={'popoverButton'}><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
						</OverlayTrigger>
					</ButtonToolbar>
					<HelpBlock className={props.question.error[1]? '': 'hidden'}>{props.question.error[1]}</HelpBlock>
				</div>
		</FormGroup>	
		<Button className='button' id='submitButton' disabled={props.question.disabled} type='submit'>Log In<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
	</form>
	);		
};

module.exports = LogIn;