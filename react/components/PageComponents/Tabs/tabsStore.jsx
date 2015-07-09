import alt from '../../altInstance';
import TabsActions from './tabsActions'

class TabsStore {
    constructor() {
        this.bindListeners({
            addTabs: TabsActions.addTabs,
            removeTabs: TabsActions.removeTabs,
            setTabs: TabsActions.setTabs,
            setActive: TabsActions.setActive
        })
        this.tabs = []

    }


    setActive(tab){
        for (var n = 0 ; n <  this.tabs.length ; n++) {
            this.tabs[n].active = false
            if (this.tabs[n].name == tab.name) {
                this.tabs[n].active = true
            }
        }
    }


    setTabs(tab){
        this.tabs=[tab];
    }

    addTabs(tab) {
        var exists = false;
        for(var i=0;i<this.tabs.length;i++){
            this.tabs[i].active = false
            if(this.tabs[i].name == tab.name){
                this.tabs[i].active = true
                exists=true;
            }
        }

        if(exists){
            return;
        }

        this.tabs.push({name:tab.name,link:tab.link,params:tab.params,active:true});

    }

    removeTabs(tab){
        for (var n = 0 ; n <  this.tabs.length ; n++) {
            if (this.tabs[n].name == tab.name) {
                var removedObject = this.tabs.splice(n,1);
                removedObject = null;
                break;
            }
        }
        this.tabs[this.tabs.length-1].active = true;
    }

    static getTabIndex(name) {
        var state = this.getState();
        for (var n = 0 ; n <  state.tabs.length ; n++) {
            if (state.tabs[n].name == name) {
                return n;
            }
        }
    }

    static getPreviousTab() {
        var state = this.getState();
        var currentIndex=null;
        for (var n = 0 ; n <  state.tabs.length ; n++) {
            if (state.tabs[n].active == true) {
                currentIndex =  n;
            }
        }
        if(currentIndex==0){
            return {tab:{},index:currentIndex-1};
        }
        return {prevTab:state.tabs[currentIndex-1],
                currentTab:state.tabs[currentIndex],
                index:currentIndex-1};

    }

    static getTabs() {
        var state = this.getState();
        return state

    }



}

export default alt.createStore(TabsStore, 'TabsStore');