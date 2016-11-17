import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";

const rootRoute = {
    path: '/',

    indexRoute: {
        getComponent(nextState:any, cb :any) {
            require.ensure([], (require:any) => {
                cb(null, require('./views/Home').default)
            }, 'home')
        },
    },

    getComponent(nextState:any, cb:any) {
        require.ensure([], (require:any) => {
            cb(null, require('./views/App').default)
        }, 'app')
    },

    childRoutes: [
        require('./routes/login/login.route.ts'),
        require('./routes/register/register.route.ts')
    ]
}

ReactDOM.render(
    (
        <Router history={hashHistory}  routes={rootRoute} />
    ),
    document.getElementById("mywebcontent")
);
