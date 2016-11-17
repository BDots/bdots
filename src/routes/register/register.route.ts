module.exports = {
    path: 'register',

    /*getChildRoutes(partialNextState:any, cb:any) {
        require.ensure([], (require:any) => {
            cb(null, [
                require('./info/info.route.ts'),
                require('./complete/complete.route.ts')
            ])
        })
    },*/

    getComponent(nextState:any, cb:any) {
        require.ensure([], (require:any) => {
            cb(null, require('../../views/Register').default)
        }, 'Register')
    }
}