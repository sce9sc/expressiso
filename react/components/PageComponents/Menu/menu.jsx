var React = require("react");
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;
var State = ReactRouter.State

//Import UI
var TreeView = require('./treeview')
var MenuBtn = require('./menuBtn')
var MenuUserInfo = require('./menuUserInfo');
var MenuSearch = require('./menuSearch');

//Import Flux Related
import connectToStores from 'alt/utils/connectToStores';
import MenuStore from './MenuStore';
import MenuActions from './MenuActions';

import UserStore from '../Users/userStore';



var Menu = React.createClass({
    mixins: [ State ],

    getInitialState:function(){
        var storeState = UserStore.getState();
        var menuState = MenuStore.getState();
        console.log(menuState);
        var initfocus = this.getRoutes()[1].name;
        return {
            user:storeState.user,
            focus:initfocus,
            menuBtns:menuState.menu.menuBtns
        };
    },

    handleResize: function(e) {
        console.log("resized")
        //this.setState({windowWidth: window.innerWidth});
    },

    testme:function(t){
        console.log('testme==')
        MenuActions.toggleMenuActive(t)
    },

    _onChange: function()
    {
        console.log("_onchange")
       //var menuActive = MenuStore.getState().menu;
       //this.setState({focus:menuActive.active})
        //console.log(menuActive)
    },


    componentDidMount:function()
    {
       $(this.getDOMNode())
        MenuStore.listen(this._onChange);
       //window.addEventListener('resize', this.handleResize);
    },


    componentWillUnmount:function()
    {
        MenuStore.unlisten(this._onChange);
       // window.removeEventListener('resize', this.handleResize);
    },

    clickme : function(event){
        console.log("was clicked")
        console.log(event.target)
    },

    createMenu:function(focus){
        var menu = this.state.menuBtns.map(function (m, i) {
                if(m.type=="TreeView")
                {
                    return <TreeView key={m.name} name={m.name} focus={focus}  className={m.className} links={m.links}/>
                }
                if(m.type=="MenuBtn"){
                    return <MenuBtn key={m.name} name={m.name} focus={focus} className="fa-th" link={m.link} />
                }
        })
        return menu
    },

    render()
    {



        //var isActive = this.isActive(this.props.to, this.props.params, this.props.query);
        var focus = this.getRoutes()[1].name;
        var menu = this.createMenu(focus);

        console.log("rendering menu :focus = "+ focus );

        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <MenuUserInfo />
                    <MenuSearch />
                    <ul className="sidebar-menu">
                        <li className="header">MAIN NAVIGATION</li>
                        {menu}
                        <li>
                            <a href="#" onClick={this.testme.bind(this,"dashboard")}>
                                <i className="fa fa-calendar"></i> <span>Calendar</span>
                                <small className="label pull-right bg-red">3</small>
                            </a>
                        </li>
                        <li><a href="AdminLTE-2.1.1/documentation/index.html"><i className="fa fa-book"></i> <span>Documentation</span></a>
                        </li>
                        <li className="header">LABELS</li>
                        <li><a href="#"><i className="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
                        <li><a href="#"><i className="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
                    </ul>
                </section>
            </aside>
        );
    }
});

module.exports =  Menu;