var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Link = require('react-router').Link;
var Button = require('react-bootstrap').Button;

var Menu = function(props){
	return(
	    <section >
	    	<Row >
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={1}>
	    			<Link to='/infoOrder/0'>
	    				<Button type='button' className='button'>
	    					<h2>Respond to <br/>Info Order</h2>
	    				</Button>
	    			</Link>
	    		</Col>	    		
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={2}>
	    			<Link to='/waterRights/0'>
	    				<Button type='button' className='button'>
	    					<h2>Claim or Apply for<br/> Water Right</h2>
	    				</Button>
	    			</Link>
	    		</Col>
	    	</Row>

	    	<Row>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<Link to='/infoOrderFaq/0'>
	    				<Button type='button' className='button'>
	    					<h3>What is this Info Order <br/>all about?</h3>
	    				</Button>
	    			</Link>
	    		</Col>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<Link to='/waterRightsFaq/0'>
	    				<Button type='button' className='button'>
	    					<h3>What is a water right <br/>and do I need one?</h3>
	    				</Button>
	    			</Link>
	    		</Col>
	    	</Row>
	    </section>
	)
};
	
module.exports = Menu;