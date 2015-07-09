var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var State = ReactRouter.State;
var TabsActions = require('./tabsActions');
var TabsStore = require('./tabsStore');


var Tabs = React.createClass({
    mixins: [ State ],

    getInitialState: function() {
        var route = this.getRoutes()[1];
        var tab= {name:route.name,link:route.path,params:{}};
        var params = this.getParams()
        if(params) {
            tab.params = params
        }

        TabsActions.addTabs(tab)
        return { tabs: [tab] };
    },
    _onChange: function()
    {
        console.log("_onchange")
        var tabs = TabsStore.getState().tabs;
        this.setState({tabs:tabs})
        //console.log(menuActive)
    },
    componentDidMount:function()
    {
        //$(this.getDOMNode())
        TabsStore.listen(this._onChange);
        //window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount:function()
    {
        TabsStore.unlisten(this._onChange);
        // window.removeEventListener('resize', this.handleResize);
    },

    render() {
        var tabs = this.state.tabs;

        var tabLinks = tabs.map(function(tab,index) {

            return (<li key={tab.name}>
                    <Link to={tab.link} params={tab.params} >{tab.name}</Link>
                    </li>)
            })

         return (
             <ol className="breadcrumb">
                {tabLinks}
            </ol>

        );
    }
});

module.exports = Tabs;