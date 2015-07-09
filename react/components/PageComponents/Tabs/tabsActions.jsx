import alt from '../../altInstance';

class TabsActions {
    constructor(){
        this.generateActions('addTabs','removeTabs','setTabs','setActive')
    }
}

export default alt.createActions(TabsActions);