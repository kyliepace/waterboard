React = require('react');
var Button = require('react-bootstrap').Button;

var Final = function(props){
	return(
		<div id='final'>
			<div>
				<h1>All Done!</h1>

				<Button type='button' onClick={props.onClick}>Print Record</Button>
			</div>
		</div>
	);		
};

module.exports = Final;