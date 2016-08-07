React = require('react');
var Row = require('react-bootstrap').Row;
var FormGroup = require('react-bootstrap').FormGroup;

var Button = require('react-bootstrap').Button;


var User = function(props){
	return(
	<form onSubmit={props.onSubmit}>
		
			<h3>Welcome {props.user.owner}</h3>
			
			<div>
				<h3>This APN refers to a parcel at {props.user.address}</h3>
			</div>

			<div className={props.user.multParcels ? '': 'hidden'}>
				<h3>Our records indicate that you own multiple parcels subject to the Info Order. <br/> 
				Please note that you must log in and complete the form for each parcel.</h3>
			</div>

			<div className={ props.user.sources ? '': 'hidden'}>
				<h3 >You have indicated that this parcel is served by {props.user.sources} water sources. <br/>
				You have submitted information for {props.user.reportedSources} water sources.</h3>
			</div>
	

		<Button className='button'  id='submitButton' type='submit'>Continue to Form<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
		
	</form>
	);		
};

module.exports = User;