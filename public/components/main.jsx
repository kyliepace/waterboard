var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Main = React.createClass({
    render: function(){
    	return(
    		<div className='main'>
    			<Header />
    			{this.props.children}
    			<Footer />
    		</div>
    	);
    }
});

module.exports = Main;