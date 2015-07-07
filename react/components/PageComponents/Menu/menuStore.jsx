import alt from '../../altInstance';
import MenuActions from './MenuActions'

class MenuStore {
    constructor() {
        this.bindListeners({
            updateMenuActive: MenuActions.toggleMenuActive
        })

        this.menu = {
            active: "about",
            menuBtns:[
            {
                type:"TreeView",
                name:"Stavros",
                className:"fa-table",
                links:["about","dashboard"]
            },
            {
                type:"MenuBtn",
                name:"Table",
                className:"fa-th",
                link:"table"
            },
            {
                type:"MenuBtn",
                name:"Charts",
                className:"fa-th",
                link:"charts"
            },
            {
                type:"MenuBtn",
                name:"Modal",
                className:"fa-th",
                link:"modal"
            }
            ]
        };
    }

    updateMenuActive(link) {

        console.log('updateMenuActive');
        console.log(this.menu.active)
        console.log(link)
        //console.log(this.menu.menuActive);
        this.menu.active = link
    }


}

export default alt.createStore(MenuStore, 'MenuStore');