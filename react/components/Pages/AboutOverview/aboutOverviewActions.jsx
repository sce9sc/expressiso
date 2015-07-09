import alt from '../../altInstance';

class AboutOverviewActions {
    constructor(){
        this.generateActions('save','saveCurrent')
    }
}

export default alt.createActions(AboutOverviewActions);