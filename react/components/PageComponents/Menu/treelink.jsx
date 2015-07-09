var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../Tabs/tabsActions');




var MenuBtn = React.createClass({
    getInitialState: function() {
        return {treeActiveState:false};
    },
    linkClick:function(link){
        TabsActions.setTabs({name:link,link:'/'+link,active:true})
    },
    render() {
        var treestate = this.state.treeActiveState?'active':"";
        var link = this.props.link;
        var treestate = this.props.focus==link?'active':"";
        return (
            <li className={treestate}>
                <Link onClick={this.linkClick.bind(this,link)} to={link}><i className="fa fa-circle-o"></i>{link}</Link>
            </li>
        );
    }
});

module.exports = MenuBtn;