var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var actions=require('../redux/actions.js');
var Confirm = require('./confirm.jsx');

var InfoOrder = React.createClass({
	getDefaultProps: function(){
		return{
			input: false,
			selection: false,
			dropdown: false,
			disabled: false
		};
	},
	componentWillMount: function(){
		if(parseInt(this.props.params.counter) ===0){
			this.props.dispatch(actions.onLoad()); //dispatch the reducer to set up the answer objects
		}
	},
	handleClick: function(e){
		this.props.dispatch(actions.chooseOption(e)); //send the glyphicon's html and key value to the action
	},
	handleChange: function(e){
		this.props.dispatch(actions.changeInput(e));
	},
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		if(parseInt(this.props.infoOrder.counter)===0){ //if this is the log-in page being submitted, talk to server
			//dispatch logIn function with idCode and password from state
			this.props.dispatch(actions.logIn(that.props.infoOrder.answers[0][0][0], that.props.infoOrder.answers[0][0][1]));
			
			//this.props.history.push('/infoOrder/'+that.props.infoOrder.next);
		}
		else{
			console.log('next will be '+ this.props.infoOrder.next);
			this.props.history.push('/infoOrder/'+that.props.infoOrder.next);
			this.props.dispatch(actions.submitAnswer());
		}

	},
	sendData: function(){

	},
	addSource: function(){

	},
	saveForm: function(){

	},
	render: function(props){
		var that = this;
		
		console.log(that.props.infoOrder); 
		var questions = that.props.infoOrder.questions;
		if(that.props.infoOrder.counter === 1){
			var index= 1;
		}
		else{
			var index = that.props.params.counter;
		}
		
		console.log('index is '+index);
		var singleQuestion = questions[index];
		var answer = that.props.infoOrder.answers[that.props.infoOrder.sourceCounter][index]; //should be an array

		if(index>1000){
			var show = (
				<h4>Saving...</h4>
			);
		}
		else if(index>100){
			var show = (
				<Confirm sendData={that.sendData} addSource={that.addSource} saveForm={that.saveForm} onClick={that.prevQuestion}/>
			);
		}
		else{
			var show = (
				<Question onSubmit={that.onSubmit} onClick={that.prevQuestion} disabled={singleQuestion.disabled}
    			answer = {answer} question={singleQuestion} handleClick={that.handleClick} handleChange={that.handleChange}/>
			);
		}
		return(
		    <section>
		    	{show}
    			
	    		<Col xs={8} xsOffset={2} md={6} mdOffset={3}>
		    		<h4>Info Order Form</h4>
		    		<h4 className={this.props.infoOrder.owner ? '':'hidden'}>{this.props.infoOrder.owner}</h4>
		    		<h4 className ={this.props.infoOrder.address ? '':'hidden'}>{this.props.infoOrder.address}</h4>
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