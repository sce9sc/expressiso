var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../Tabs/tabsActions');


var MenuBtn = React.createClass({
    getInitialState: function() {
        return {treeActiveState:false};
    },
    toggleActiveState:function(event){
       this.setState({treeActiveState:!this.state.treeActiveState})
    },
    linkClick:function(link){
        TabsActions.setTabs({name:link,link:'/'+link,active:true})
    },
    render() {
        var name = this.props.name;
        var link = this.props.link;
        var focus = (this.props.focus == link)?"active":"";
        return (
            <li className={focus}>
                <Link onClick={this.linkClick.bind(this,link)} to={link}>
                    <i className={"fa "+this.props.className}></i> <span>{name}</span> <small className="label pull-right bg-green">Hot</small>
                </Link>
            </li>
        );
    }
});

module.exports = MenuBtn;