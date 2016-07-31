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
		console.log(e);
		this.props.dispatch(actions.chooseOption(e, 'infoOrder')); //send the glyphicon's html and key value to the action
	},
	handleChange: function(e){
		this.props.dispatch(actions.changeInput(e));
	},
	onSubmit: function(){
		console.log("submit");
		this.props.dispatch(actions.submitAnswer('infoOrder'));
	},
	prevQuestion: function(){
		//dispatch an action that will reduce the counter by the amount that was just added to it
	},
	render: function(props){
		var that = this;
		console.log(that.props.infoOrder); //becomes undefined when I try to render the 3rd question
		var questions = that.props.infoOrder.questions;
		var index = that.props.infoOrder.counter;
		var singleQuestion = questions[index];
		console.log(questions);
		console.log(questions[index]);

		if(questions[index].length>1){
			var showQuestions = questions[index].map(function(question){
				return (<Question questionId={question.id} line={question.line} handleClick={that.handleClick} handleChange={that.handleChange}
				key={question.key} target={question.target} popover={question.popover}
				input={question.input} selection={question.selection}/>);
			});
		}
		else{
			var showQuestions = (
				<Question questionId={singleQuestion.id} line={singleQuestion.line} handleClick={that.handleClick} handleChange={that.handleChange}
				show={singleQuestion.show} key={questions[index].key} target={singleQuestion.target} popover={singleQuestion.popover}
				input={singleQuestion.input} selection={singleQuestion.selection}/>
			)
		}

		return(
		    <section>
	    		<Col xs={10} xsOffset={1} md={6} mdOffset={3}>
	    			<form className='questionView' onSubmit = {that.onSubmit}>
		    			{showQuestions}
		    			<div className='flex'>
		    				<Button className='button' onClick = {that.prevQuestion} type='button'><span className='glyphicon glyphicon-arrow-left' aria-hidden='left'></span></Button>
	    					<Button className='button' type='submit'><span className='glyphicon glyphicon-arrow-right' aria-hidden='true'></span></Button>
		    			</div>
	    			</form>
	    		</Col>

	    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    		<h4>Info Order Form</h4>
		    	</Col>
		    </section>
		)
	}
});

var mapStateToProps = function(state, props) {
    return {
        infoOrder: state.infoOrder.infoOrder
    };
};

var Container = connect(mapStateToProps)(InfoOrder);

module.exports = Container;