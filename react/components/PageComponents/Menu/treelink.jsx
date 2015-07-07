var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
//var createActiveRouteComponent = require('react-router-active-component');




var MenuBtn = React.createClass({
    getInitialState: function() {
        return {treeActiveState:false};
    },
    render() {
        var treestate = this.state.treeActiveState?'active':"";
        var link = this.props.link;
        var treestate = this.props.focus==link?'active':"";
        return (
            <li className={treestate}>
                <Link to={link}><i className="fa fa-circle-o"></i>{link}</Link>
            </li>
        );
    }
});

module.exports = MenuBtn;