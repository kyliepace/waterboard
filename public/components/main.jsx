var React = require('react');
var connect = require('react-redux').connect;
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

var Main = React.createClass({
    render: function(){
    	return(
    		<div>
    			<Header />
    			{this.props.children}
    			<Footer />
    		</div>
    	);
    }
});

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

var Container = connect(mapStateToProps)(Main);

module.exports = Container;