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
var InfoOrder = require('./public/components/infoOrder.jsx');
var WaterRights=require('./public/components/waterRights.jsx');
var WaterRightsFaq=require('./public/components/waterRightsFaq.jsx');
var InfoOrderFaq=require('./public/components/infoOrderFaq.jsx');

var routes = (
	<Provider store={store}>
	  <Router history={hashHistory} onUpdate={()=> window.scrollTo(0,0)}>
	    <Route path='/' component={Main}>
	      	<IndexRoute component={Menu}/>

	      	<Route path='/infoOrder/:counter' component={InfoOrder}/>

	      	<Route path='/waterRights' component={WaterRights}/>
	      	<Route path='/infoOrderFaq' component={InfoOrderFaq}/>
	      	<Route path='/waterRightsFaq' component={WaterRightsFaq}/>
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