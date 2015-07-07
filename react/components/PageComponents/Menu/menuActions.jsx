import alt from '../../altInstance';

class MenuActions {
    constructor(){
        this.generateActions('toggleMenuActive')
    }
}

export default alt.createActions(MenuActions);