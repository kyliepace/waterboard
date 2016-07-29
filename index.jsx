var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

var store = require('./public/redux/store.js');
var Main = require('./public/components/main.jsx');
var Menu = require('./public/components/menu.jsx');
var infoOrder = require('./public/components/infoOrder.jsx');

var routes = (
	<Provider store={store}>
	  <Router history={hashHistory} >
	    <Route path='/' component={Main}>
	      	<IndexRoute component={Menu}/>
	    </Route>    
	  </Router>
	</Provider>
);



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        routes,
        document.getElementById('app')
    );
});