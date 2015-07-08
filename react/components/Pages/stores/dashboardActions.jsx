import alt from '../../altInstance';

class DashboardActions {
    constructor(){
        this.generateActions('save')
        this.generateActions('saveCurrent')
    }
}

export default alt.createActions(DashboardActions);