var React = require('react');
var Col = require('react-bootstrap').Col;
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var FAQ = require('./faq.jsx');

var WaterRightsFaq = React.createClass({
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		var index = this.props.params.counter; //decide what value the index should be
		//calculate where the page should go next
		var next = that.props.waterRightsFAQ.questions[index].changeCounter[e.target.id];
		this.props.history.push('/waterRightsFAQ/'+next); //push browser history
	},

	render: function(props){
		var that = this;
		var index = that.props.params.counter;
		var question = that.props.waterRightsFAQ.questions[index];

		if(index >= 100 && index<1000){
			// go to waterRights login
			that.props.history.push('/waterRights/0');
		}
		else if(index>= 1000){
			//go back to menu
			that.props.history.push('/');
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
	
module.exports = WaterRightsFaq;