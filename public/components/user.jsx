React = require('react');
var Row = require('react-bootstrap').Row;
var FormGroup = require('react-bootstrap').FormGroup;
var Link = require('react-router').Link;
var Button = require('react-bootstrap').Button;
var Final = require('./final.jsx');

var User = function(props){
	return(
	<form onSubmit={props.onSubmit}>
		
		<h3>Welcome {props.user.owner}</h3>
		
		<div>
			<h3 className='line'>This APN refers to a parcel at {props.user.address}</h3>
		</div>

		<div className={props.user.multParcels ? '': 'hidden'}>
			<h3>Our records indicate that you own multiple parcels subject to the Info Order. <br/> 
			Please note that you must log in and complete the form for each parcel.</h3>
		</div>

		<div className={ props.user.numSources ? '': 'hidden'}>
			<h3 >You have indicated that this parcel is served by {props.user.numSources} water sources. <br/>
			You have submitted information for {props.user.reportedSources} water sources.</h3>
		</div>
	
		<div className={props.user.complete ? 'final': 'hidden'}>
			<Final />
		</div>
		
		<Button className={props.user.moreSources ? 'button': 'hidden'} onClick={props.onSubmit} id='submitButton' type='button'>Continue to Form<span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
		<Button className={props.user.moreParcels ? 'button':'hidden'} onClick={props.toLogIn} type='button'>Log Another Parcel</Button>
	</form>
	);		
};

module.exports = User;