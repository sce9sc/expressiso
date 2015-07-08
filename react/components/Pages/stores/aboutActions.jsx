import alt from '../../altInstance';

class AboutActions {
    constructor(){
        this.generateActions('save')
        this.generateActions('saveCurrent')
    }
}

export default alt.createActions(AboutActions);