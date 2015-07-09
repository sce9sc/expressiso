import alt from '../../altInstance';
import AboutActions from './aboutActions'

class AboutStore {
    constructor() {
        this.bindListeners({
            save: AboutActions.save,
            saveCurrent: AboutActions.saveCurrent
        })
        this.about = {current:{input:""}}
    }

    save(data){
        this.about={};
    }

    saveCurrent(data) {
        this.about={current:data}
    }



}

export default alt.createStore(AboutStore, 'AboutStore');