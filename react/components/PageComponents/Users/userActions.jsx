import alt from '../../altInstance';

class UserActions {
    constructor(){
        this.generateActions('changeUserParams')
    }
}

export default alt.createActions(UserActions);