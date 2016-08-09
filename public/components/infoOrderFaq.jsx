var React = require('react');
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var FAQ = require('./faq.jsx');

var InfoOrderFaq = React.createClass({

	render: function(props){
		var index = props.infoOrderFAQ.counter;
		var question = props.infoOrderFAQ.questions[index];

		var show= (
			<FAQ /> 
		);

		return(
		    <section>

		    	{show}

	    		
		    </section>
		);

	}

	
};

var mapStateToProps = function(state, props) {
    return {
        infoOrderFAQ: state.infoOrderFAQ
    };
};

var Container = connect(mapStateToProps)(infoOrderFAQ);

module.exports = Container;
	

module.exports = InfoOrderFaq;