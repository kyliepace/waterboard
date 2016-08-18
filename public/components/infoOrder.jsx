var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var actions=require('../redux/actions.js');
var Confirm = require('./confirm.jsx');
var LogIn = require('./logIn.jsx');
var User = require('./user.jsx');

var InfoOrder = React.createClass({
	getDefaultProps: function(){
		return{
			input: false,
			selection: false,
			dropdown: false,
			disabled: false
		};
	},
	componentWillMount: function(props){
		var index = this.props.params.counter;
		this.props.actions.onLoad(index); //dispatch the reducer to set up the answer objects
	},
	handleClick: function(e){
		var index = this.props.params.counter; //decide what value the index should be
		this.props.actions.chooseOption(e, index); ///send the action e - which button has been clicked - and index - where in the question array to look
	},
	handleChange: function(e){
		var index = this.props.params.counter; //decide what value the index should be
		this.props.actions.changeInput(e, index); 
	},
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		var index = this.props.params.counter; //decide what value the index should be
		if(parseInt(index) === 0){
			that.props.actions.logIn(that.props.infoOrder.answers[0][0][0], that.props.infoOrder.answers[0][0][1]);
		}
		this.props.history.push('/infoOrder/'+that.props.infoOrder.questions[that.props.params.counter].next);
		this.props.actions.submitAnswer(index);
	},
	sendData: function(){
		var that = this;
		this.props.actions.submitSource(that.props.infoOrder.answers[0][0][0], that.props.infoOrder.answers, that.props.infoOrder.questions);
		this.props.history.push('/infoOrder/1'); //return to user screen with option to print out data or sign in to different parcel
	},
	changeSource: function(e){
		//dispatch an action that changes the infoOrder.sourceCounter to e.target.value
		this.props.actions.changeSource(e);
	},
	print: function(){
		this.props.history.push('/print'); //show Print component
	},
	toLogIn: function(){
		this.props.history.push('/infoOrder/0');
		this.props.actions.submitAnswer(index);
	},
	render: function(props){
		document.body.style.cursor = 'default'; //return cursor to default
		var that = this; 
		var questions = that.props.infoOrder.questions; //this is getting the blank infoOrderState, not the state
		var index = that.props.params.counter;  
		var singleQuestion = questions[index];
		var answer = that.props.infoOrder.answers[that.props.infoOrder.sourceCounter][index]; //should be an array
		
		if(parseInt(index) === 0){
			var show = (
				<LogIn question={singleQuestion} handleChange={that.handleChange} onSubmit={that.onSubmit}/>
			);
		}
		else if(parseInt(index) === 1){
			
			var show = (
				<User user={that.props.infoOrder} onSubmit={that.onSubmit} onClick={that.print} question={singleQuestion}
				toLogIn={that.toLogIn}/>
			);
		}
		else if(index >= 100 && index < 1000){
			var show = (
				<Confirm sendData={that.sendData} />
			);
		}
		
		else{
			var show = (
				<Question onSubmit={that.onSubmit} user={that.props.infoOrder}
    			answer = {answer} question={singleQuestion} handleClick={that.handleClick} handleChange={that.handleChange}
    			changeSource={that.changeSource}/>
			);
		}
		return(
		    <section>
		    	{show}
	    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    		<h4>Info Order Form</h4>
		    		<h4 className={this.props.infoOrder.owner ? '':'hidden'}>{this.props.infoOrder.owner}</h4>
		    		<h4 className ={this.props.infoOrder.address ? '':'hidden'}>{this.props.infoOrder.address}</h4>
		    		<h4 className={this.props.infoOrder.numSources ? '':'hidden'}>{parseInt(this.props.infoOrder.reportedSources) } of {this.props.infoOrder.numSources} water sources</h4>
		    	</Col>
		    </section>
		)
	}
});

module.exports = InfoOrder;