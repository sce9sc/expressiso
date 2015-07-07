import alt from '../../altInstance';
import UserActions from './userActions'

class UserStore {
    constructor() {
        this.bindListeners({
            updateUser: UserActions.changeUserParams
        })

        this.user = {
            admin: true
        };
    }

    updateUser(userObj) {

        console.log('updateUser');
        console.log(this.user.admin)
        console.log(userObj)
        //console.log(this.menu.menuActive);
        //this.user.admin = userObj
    }


}

export default alt.createStore(UserStore, 'UserStore');