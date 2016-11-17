"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_1 = require("react-router");
/*import { App } from "./views/App";
import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";*/
var rootRoute = {
    childRoutes: [{
            path: '/',
            component: require('./views/App'),
            indexRoutes: require('./views/Home'),
            childRoutes: [
                require('./views/Login'),
                require('./views/Register')
            ]
        }]
};
ReactDOM.render((
/*<Router history={hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/register(/:id)" component={Register}/>
    </Route>
</Router>*/
<react_router_1.Router history={react_router_1.hashHistory} routes={rootRoute}/>), document.getElementById("mywebcontent"));
//# sourceMappingURL=index.js.map