import alt from '../../altInstance';

class DashboardActions {
    constructor(){
        this.generateActions('save','saveCurrent')
    }
}

export default alt.createActions(DashboardActions);