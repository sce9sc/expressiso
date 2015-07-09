import alt from '../../altInstance';
import AboutOverviewActions from './aboutOverviewActions'

class AboutOverviewStore {
    constructor() {
        this.bindListeners({
            save: AboutOverviewActions.save,
            saveCurrent: AboutOverviewActions.saveCurrent
        })
        this.about = {current:{input:""}}

    }

    save(tab){
        this.about={};
    }

    saveCurrent(data) {
        this.about={current:data}
    }



}

export default alt.createStore(AboutOverviewStore, 'AboutOverviewStore');