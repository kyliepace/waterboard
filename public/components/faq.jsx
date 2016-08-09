var React = require('react');
var Row = require('react-bootstrap').Row;
var FormGroup = require('react-bootstrap').FormGroup;

var Button = require('react-bootstrap').Button;


var FAQ = function(props){
	//if none of the selections should generate an email
	var options = [];
	if(!props.question.email){
		for (var i=0; i<props.question.selection.length; i++){
			options.push(
				<Button className={'option'} type='button' id={i} onClick={props.onClick}>
					<h3 id={i} onClick={props.onClick}>{props.question.selection[i]}</h3>
				</Button>
			)
		}
	}
	else{ //else make the first selection a link
		options.push(
			<Button className={'option'} type='button' id={0}>
				<a href='mailto:rr_tribs_emergency_reg@waterboards.ca.gov'>
				<h3 id={0}>{props.question.selection[0]}</h3></a>
			</Button>
		);
		options.push(
			<Button className={'option'} type='button' id={1} onClick={props.onClick}>
				<h3 id={1} onClick={props.onClick}>{props.question.selection[1]}</h3>
			</Button>
		);
	}
	
	
	return(
	<form onSubmit={props.onSubmit}>
		
		<FormGroup className={'selector'}>

			<h3>{props.question.line}</h3>

			<h3 className={props.question.link ? "":"hidden"}><a target='_blank' href={props.question.link}>Please use this mapping tool 
			to see if your property is within the affected watersheds.</a></h3>

			<Row className='options'>
				{options}
			</Row>
		</FormGroup>

	</form>
	);		
};

module.exports = FAQ;
