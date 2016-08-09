var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var router = require('react-router');
var Link = router.Link;
var Button = require('react-bootstrap').Button;

var Menu = function(props){
	return(
	    <section >
	    	<Row >
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={1}>
	    			<Link to='/infoOrder/0'><Button type='button' className='button'>
	    				<h2>Respond to <br/>Info Order</h2>
	    			</Button></Link>
	    		</Col>	    		
	    		<Col className='menu' xs={10} md={4} xsOffset={1} mdOffset={2}>
	    			<Button type='button' className='button'><Link to='/waterRights/0'>
	    				<h2>Claim or Apply for<br/> Water Right</h2>
	    			</Link></Button>
	    		</Col>
	    	</Row>

	    	<Row>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<Button type='button' className='button'><Link to='/infoOrderFaq/0'>
	    				<h3>What is this Info Order <br/>all about?</h3>
	    			</Link></Button>
	    		</Col>
	    		<Col className='menu' xs={10} md={10} xsOffset={1} mdOffset={1}>
	    			<Button type='button' className='button'><Link to='/waterRightsFaq/0'>
	    				<h3>What is a water right <br/>and do I need one?</h3>
	    			</Link></Button>
	    		</Col>
	    	</Row>

	    </section>
	)
};
	

module.exports = Menu;