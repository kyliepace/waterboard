var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var connect = require('react-redux').connect;
var bindActionCreators = require('redux').bindActionCreators;
var actionCreators = require('../redux/actions.js');

var Main = React.createClass({
    render: function(props){
    	var that = this;

    	var childrenWithProps = React.Children.map(this.props.children, 
    		(child) => React.cloneElement(child, {
    			actions: that.props.actions,
    			infoOrder: that.props.infoOrder,
    			infoOrderFAQ: that.props.infoOrderFAQ,
    			waterRights: that.props.waterRights,
    			waterRightsFAQ: that.props.waterRightsFAQ
    		})
    	);
    	return(
    		<div className='main'>
    			<Header />
    			{childrenWithProps}
    			<Footer />
    		</div>
    	);
    }
});

var mapStateToProps = function(state, props) {
    return {
        infoOrder: state.infoOrder,
        infoOrderFAQ: state.infoOrderFAQ,
        waterRights: state.waterRights,
        waterRightsFAQ: state.waterRightsFAQ
    };
};
var mapDispatchToProps = function(dispatch){
	return{
		actions: bindActionCreators(actionCreators, dispatch)
	}
}

var Container = connect(mapStateToProps, mapDispatchToProps)(Main);

module.exports = Container;
//module.exports = Main;