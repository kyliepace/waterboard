var React = require('react');
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var FAQ = require('./faq.jsx');

var InfoOrderFaq = React.createClass({
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		var index = this.props.params.counter; //decide what value the index should be
		//calculate where the page should go next
		var next = that.props.infoOrderFAQ.questions[index].changeCounter[e.target.id];
		this.props.history.push('/infoOrderFAQ/'+next); //push browser history
		this.props.actions.submitInfoOrderFaq();
	},
	render: function(props){
		var that = this;
		var index = that.props.params.counter;
		var question = that.props.infoOrderFAQ.questions[index];

		if(index >= 100 && index < 1000){
			//go to infoOrder login
			that.props.history.push('/infoOrder/0');
		}
		else if(index >= 1000 && index < 2000){
			//go back to home menu
			that.props.history.push('/');
		}
		else if(index >= 2000){
			//go to water rights FAQ
			that.props.history.push('/waterRightsFAQ/0');
		}
		else{
			var show= (
				<FAQ question = {question} onSubmit = {that.onSubmit} onClick={that.onSubmit}/> 
			);
		}
		return(
		    <section>
		    	{show}
		    </section>
		);
	}	
});

module.exports = InfoOrderFaq;