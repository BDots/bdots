/**
 * Created by xihong.shi on 10/17/2016.
 */

module.exports = {
    path: 'login',

    getComponent(nextState:any, cb:any) {
        require.ensure([], (require:any) => {
            cb(null, require('../../views/Login.tsx').default)
        }, 'login')
    }
}