var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var Confirm = require('./confirm.jsx');


var WaterRights = React.createClass({
	componentWillMount: function(props){
		var index = this.props.params.counter;
		this.props.actions.onLoadWr(index); //dispatch the reducer to set up the answer objects
	},
	handleClick: function(e){
		var index = this.props.params.counter; //decide what value the index should be
		this.props.actions.chooseOptionWr(e, index); ///send the action e - which button has been clicked - and index - where in the question array to look
	},
	handleChange: function(e){ //when input field changed
		var index = this.props.params.counter; //decide what value the index should be
		this.props.actions.changeInputWr(e, index); 
	},
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		var index = this.props.params.counter; //decide what value the index should be
		console.log('next will be '+ this.props.waterRights.questions[that.props.params.counter].next);
		this.props.history.push('/waterRights/'+that.props.waterRights.questions[that.props.params.counter].next);
		this.props.actions.submitAnswerWr(index);
	},
	sendData: function(){
		console.log('sending data');
		var that = this;
		this.props.actions.submitRight(that.props.waterRights.answers, that.props.waterRights.questions);
		this.props.history.push('/'); //return to main menu 
	},
	print: function(){
		this.props.history.push('/print'); //show Print component
	},
	render: function(props){
		var that = this; 
		console.log(that.props.waterRights);
		var questions = that.props.waterRights.questions; //this is getting the blank infoOrderState, not the state
		var index = that.props.params.counter;   //get index value from the url params
		console.log(index);
		var singleQuestion = questions[index];
		var answer = that.props.waterRights.answers[0][index]; //should be an array
		console.log(answer);
		if(index>=100 && index<1000){
			var show = (
				<Confirm sendData={that.sendData} />
			);
		}
		else{
			var show = (
				<Question onSubmit={that.onSubmit} user={that.props.waterRights}
    			answer = {answer} question={singleQuestion} handleClick={that.handleClick} handleChange={that.handleChange}
    			changeSource={that.handleClick}/>
			);
		}
		
		return(
		<section>
	    	    {show}
	
	    	    <Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    	<h4>Water Rights Reporting</h4>
		    </Col>
		 </section>
		)
	}
}); 


module.exports = WaterRights;
