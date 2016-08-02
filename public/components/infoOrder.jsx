var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var actions=require('../redux/actions.js');

var InfoOrder = React.createClass({
	getDefaultProps: function(){
		return{
			input: false,
			selection: false,
			dropdown: false,
			disabled: false
		};
	},
	handleClick: function(e){
		console.log('click'+ e.target.value);
		this.props.dispatch(actions.chooseOption(e)); //send the glyphicon's html and key value to the action
	},
	handleChange: function(e){
		if(this.props.infoOrder.counter<1){ //if the login page is being submitted
			this.props.dispatch(actions.logInSuccess()); //dispatch the login reducer
		}
		this.props.dispatch(actions.changeInput(e));
	},
	onSubmit: function(e){
		console.log("submit");
		e.preventDefault();
		this.props.dispatch(actions.submitAnswer());
	},
	prevQuestion: function(){
		//dispatch an action that will reduce the counter by the amount that was just added to it
	},
	render: function(props){
		var that = this;
		console.log(that.props.infoOrder); 
		var questions = that.props.infoOrder.questions;
		var index = that.props.infoOrder.counter;
		var singleQuestion = questions[index];

		var showQuestions = (
			<Question question={singleQuestion} handleClick={that.handleClick} handleChange={that.handleChange}/>
		);
		

		return(
		    <section className='container'>
    			<form onSubmit = {that.onSubmit}>
	    			{showQuestions}
	    			<div className='flex'>
	    				<Button className='button' onClick = {that.prevQuestion} type='button'><span className='glyphicon glyphicon-arrow-left' aria-hidden='left'></span></Button>
    					<Button className='button' disabled={singleQuestion.disabled} type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
	    			</div>
    			</form>
	   
	    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    		<h4>Info Order Form</h4>
		    	</Col>
		    </section>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
        infoOrder: state.infoOrder
    };
};

var Container = connect(mapStateToProps)(InfoOrder);

module.exports = Container;