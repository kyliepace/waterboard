var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;

var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

var IO_LogIn = require('./public/components/infoOrder/logIn.jsx');
var IO_2 = require('./public/components/infoOrder/2.jsx');
var IO_3 = require('./public/components/infoOrder/3.jsx');
var IO_4 = require('./public/components/infoOrder/4.jsx');
var IO_5 = require('./public/components/infoOrder/5.jsx');
var IO_6 = require('./public/components/infoOrder/6.jsx');
var IO_7 = require('./public/components/infoOrder/7.jsx');
var IO_8 = require('./public/components/infoOrder/8.jsx');
var IO_9 = require('./public/components/infoOrder/9.jsx');
var IO_10 = require('./public/components/infoOrder/10.jsx');
var IO_11 = require('./public/components/infoOrder/11.jsx');
var IO_12 = require('./public/components/infoOrder/12.jsx');
var IO_13 = require('./public/components/infoOrder/13.jsx');
var IO_14 = require('./public/components/infoOrder/14.jsx');
var IO_15 = require('./public/components/infoOrder/15.jsx');


var store = require('./public/redux/store.js');
var Main = require('./public/components/main.jsx');
var Menu = require('./public/components/menu.jsx');
var InfoOrder = require('./public/components/infoOrder.jsx');
var WaterRights=require('./public/components/waterRights.jsx');
var WaterRightsFaq=require('./public/components/waterRightsFaq.jsx');
var InfoOrderFaq=require('./public/components/infoOrderFaq.jsx');

var routes = (
	<Provider store={store}>
	  <Router history={browserHistory} >
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