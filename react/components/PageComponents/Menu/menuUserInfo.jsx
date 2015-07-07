var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MenuUserInfo = React.createClass({
    getInitialState: function() {
        return {treeActiveState:false};
    },
    render() {

        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="AdminLTE-2.1.1/dist/img/user2-160x160.jpg" className="img-circle"
                         alt="User Image"/>
                </div>
                <div className="pull-left info">
                    <p>Alexander Pierce</p>

                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
        );
    }
});

module.exports = MenuUserInfo;