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

var Confirm = function(props){
	return(
	<form onSubmit={props.sendData}>
		<FormGroup className={'selector'}>
			<ButtonToolbar className='flex'>
				<h2>Congrats, you've completed the form for this water source!</h2>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>If you have multiple sources of water on this parcel, you have not completed your response to the Info Order.
					If you were contacted regarding multiple properties, please complete this parcel and sign in with the next parcel's identification code (APN)</Popover>}>
					<Button className='button'><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			<Row className='options'>
				<Button className={'option'} type='button' id={0} onClick={props.addSource}>
					<span id={0} onClick={props.addSource}>I have more sources to report</span>
				</Button>
				<Button className={'option'} type='button' id={1} onClick={props.saveForm}>
					<span id={1} onClick={props.saveForm}>{'I\'m unsure of some details.'}<br/>{' Save the form but don\'t submit it yet.'}</span>
				</Button>
				<Button className={'option'} type='button' id={1} onClick={props.submitForm}>
					<span id={2} onClick={props.submitForm}>Submit the form.</span>
				</Button>
			</Row>
		</FormGroup>

		<Button className='button' id='submitButton' disabled={props.disabled} type='submit'>Next<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
	</form>
	);		
};

module.exports = Confirm;