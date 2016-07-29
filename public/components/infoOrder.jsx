var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var actions=require('../redux/actions.js');

var InfoOrder = React.createClass({
	handleClick: function(e){
		this.props.dispatch(actions.showPopover(e));
	},
	handleChange: function(e){
		this.props.dispatch(actions.changeInput(e));
	},
	onSubmit: function(){
		this.props.dispatch(actions.submitAnswer);
	},
	render: function(){
		var questions = function(){
			var questions = this.props.infoOrder.questions;
			var index = this.props.infoOrder.counter;
			var showQuestions = questions[index].map(function(question){
				return <Question key={question.key} line={question.line} handleClick={this.handleClick} handleChange={this.handleChange}
				show={question.show} popover={question.popover}/>
			});
			
		});
		return(
		    <section>
	    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
	    			<form className='question'>
		    			{showQuestions}
		    			<Button onSubmit = {this.onSubmit} type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
	    			</form>
	    		</Col>

	    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    		<h4>Info Order Form</h4>
		    	</Col>
		    </section>
		)
	}
};

var mapStateToProps = function(state, props) {
    return {
        infoOrder: state.infoOrder
    };
};

var Container = connect(mapStateToProps)(InfoOrder);

module.exports = Container;