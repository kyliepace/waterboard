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
				<h3>Congrats, you've completed the form for this water source!</h3>
				<OverlayTrigger trigger='click' placement='top' overlay={ <Popover id='popover-trigger-click'>If you have multiple sources of water on this parcel, you have not completed your response to the Info Order.
					If you were contacted regarding multiple properties, please complete this parcel and sign in with the next parcel's identification code (APN)</Popover>}>
					<Button className='button'><span className='glyphicon glyphicon-question-sign' aria-hidden='true' ></span></Button>
				</OverlayTrigger>
			</ButtonToolbar>
			<Row className='options'>
				<Button className={'option'} type='button' id={0} onClick={props.addSource}>
					<h3 id={0} onClick={props.addSource}>I have more sources to report</h3>
				</Button>
				<Button className={'option'} type='button' id={1} onClick={props.saveForm}>
					<h3 id={1} onClick={props.saveForm}>I'm unsure of some details. Save the form but don't submit it yet.</h3>
				</Button>
				<Button className={'option'} type='button' id={1} onClick={props.submitForm}>
					<h3 id={2} onClick={props.submitForm}>All the details are true to the best of my knowledge. Submit the form.</h3>
				</Button>
			</Row>
		</FormGroup>

		<div className='flex'>
			<Button className='button' onClick={props.onClick} type='button'><span className='glyphicon glyphicon-arrow-left' aria-hidden='left'></span></Button>
		</div>
	</form>
	);		
};

module.exports = Confirm;