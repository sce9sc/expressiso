import alt from '../../altInstance';
import DashboardActions from './actions/dashboardActions'

class DashboardStore {
    constructor() {
        this.bindListeners({
            save: DashboardActions.save,
            saveCurrent: DashboardActions.saveCurrent
        })
        this.dashboard = {}

    }

    save(tab){
        this.dashboard={};
    }

    saveCurrent(tab) {

    }



}

export default alt.createStore(DashboardStore, 'DashboardStore');