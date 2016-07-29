var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Footer = function(props){
	return(
	    <footer>
	      <Row>
	      	<Col xs={12} md={12}>
	      		<p>Division of Water Rights</p>
	      		<p>(916) 322-8422</p>
	      		<p>rr_tribs_emergency_reg@waterboards.ca.gov</p>
	      	</Col>
	      </Row>
	    </footer>
	)
};
	

module.exports = Footer;