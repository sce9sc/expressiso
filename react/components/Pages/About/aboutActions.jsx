import alt from '../../altInstance';

class AboutActions {
    constructor(){
        this.generateActions('save','saveCurrent')
    }
}

export default alt.createActions(AboutActions);