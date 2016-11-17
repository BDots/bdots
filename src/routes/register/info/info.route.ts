/**
 * Created by xihong.shi on 10/17/2016.
 */

module.exports = {
    path: 'info',

    getComponent(nextState:any, cb:any) {
        require.ensure([], (require:any) => {
            cb(null, require('../../../components/RegisterSupplementaryInfo').default)
        }, 'info')
    }
}
