var React = require('react');
var connect = require('react-redux').connect;

var Component = React.createClass({
    ...
});

var mapStateToProps = function(state, props) {
    return {
        repositories: state
    };
};

var Container = connect(mapStateToProps)(Component);

module.exports = Container;