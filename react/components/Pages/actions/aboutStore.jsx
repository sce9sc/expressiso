import alt from '../../altInstance';
import AboutActions from './actions/aboutActions'

class AboutStore {
    constructor() {
        this.bindListeners({
            save: AboutActions.save,
            saveCurrent: AboutActions.saveCurrent
        })
        this.about = {}

    }

    save(tab){
        this.about={};
    }

    saveCurrent(tab) {

    }



}

export default alt.createStore(AboutStore, 'AboutStore');