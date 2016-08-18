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
			
			<h2>I confirm that the information I've entered is true to the best of my knowledge</h2>

			<Row className='options'>
				<Button className={'option'} type='button' onClick={props.sendData}>
					<h3>Yes. Submit info for this water source</h3>
				</Button>		
			</Row>
		</FormGroup>
	</form>
	);		
};
module.exports = Confirm;