var React = require('react');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Question = require('./question.jsx');
var Button = require('react-bootstrap').Button;
var connect = require('react-redux').connect;
var actions=require('../redux/actions.js');
var Confirm = require('./confirm.jsx');
var LogIn = require('./logIn.jsx');
var User = require('./user.jsx');
var Final = require('./final.jsx');

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
		console.log(this.props);
		this.props.actions.onLoad(index); //dispatch the reducer to set up the answer objects
	},
	handleClick: function(e){
		var index = this.props.params.counter; //decide what value the index should be
		this.props.dispatch(actions.chooseOption(e, index)); ///send the action e - which button has been clicked - and index - where in the question array to look
	},
	handleChange: function(e){
		var index = this.props.params.counter; //decide what value the index should be
		this.props.dispatch(actions.changeInput(e, index)); 
	},
	onSubmit: function(e){
		e.preventDefault();
		var that = this;
		if(parseInt(this.props.infoOrder.counter)===0){ //if this is the log-in page being submitted, talk to server
			//dispatch logIn function with idCode and password from state
			console.log('submit called from log in');
			that.props.dispatch(actions.logIn(that.props.infoOrder.answers[0][0][0], that.props.infoOrder.answers[0][0][1]));
		}
		else if(parseInt(this.props.infoOrder.counter)===1){
			this.props.history.push('/infoOrder/'+that.props.infoOrder.next);
			this.props.dispatch(actions.submitAnswer(1));
		}
		else{
			var index = this.props.params.counter; //decide what value the index should be
			console.log('next will be '+ this.props.infoOrder.next);
			this.props.history.push('/infoOrder/'+that.props.infoOrder.next);
			this.props.dispatch(actions.submitAnswer(index));
		}

	},
	sendData: function(){
		console.log('sending data');
		var that = this;
		this.props.dispatch(actions.submitSource(that.props.infoOrder.answers[0][0][0], that.props.infoOrder.answers));
		this.props.history.push('/infoOrder/0');
	},
	changeSource: function(e){
		//dispatch an action that changes the infoOrder.sourceCounter to e.target.value
		this.props.dispatch(actions.changeSource(e));
	},
	render: function(props){
		console.log(this.props);
		var that = this;
		console.log(that.props.infoOrder); 
		var questions = that.props.infoOrder.questions; //this is getting the blank infoOrderState, not the state

		if(that.props.infoOrder.counter === 1){
			var index= 1; //since logging in won't push to history
			console.log('index set equal to 1');
		}
		else if(that.props.infoOrder.counter ===1001){
			var index = 1001; //for going back into the form for a new source
		}
		else{
			var index = that.props.params.counter;  console.log('index taken from url');
		}//this should be the default method so that clicking the back button renders the right page
		
		console.log('index is '+index);
		var singleQuestion = questions[index];
		var answer = that.props.infoOrder.answers[that.props.infoOrder.sourceCounter][index]; //should be an array

		if(parseInt(index) === 0){
			console.log('index equal to 0, show login');
			var show = (
				<LogIn question={singleQuestion} handleChange={that.handleChange} onSubmit={that.onSubmit}/>
			);
		}
		else if(index === 1){
			console.log('show user screen');
			var show=(
				<User user={that.props.infoOrder} onSubmit={that.onSubmit}/>
			);
			console.log(show);
		}
		else if(index>100 && index<1000){
			var show = (
				<Confirm sendData={that.sendData} />
			);
		}
		else if(index>1000){
			var show=(
				<Final />
			);
		}
		else{
			var show = (
				<Question onSubmit={that.onSubmit} onClick={that.prevQuestion} user={that.props.infoOrder}
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
		    		<h4 className={this.props.infoOrder.numSources ? '':'hidden'}>{parseInt(this.props.infoOrder.sourceCounter) +1} of {this.props.infoOrder.numSources} water sources</h4>
		    	</Col>
		    </section>
		)
	}
});

// var mapStateToProps = function(state, props) {
//     return {
//         infoOrder: state.infoOrder
//     };
// };

// var Container = connect(mapStateToProps)(InfoOrder);

// module.exports = Container;
module.exports = InfoOrder;