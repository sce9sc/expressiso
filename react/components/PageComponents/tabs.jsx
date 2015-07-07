var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var State = ReactRouter.State

var Tabs = React.createClass({
    mixins: [ State ],

    getInitialState: function() {
        var name = this.getRoutes()[1].name;

        return {tabs:[name]};
    },
    render() {
        var name = this.state.tabs[0];
        return (
           <div>
               {name}
           </div>
        );
    }
});

module.exports = Tabs;