var React = require("react"),
    Menu = require("./PageComponents/Menu/menu"),
    Footer = require("./footer"),
    SideBar = require("./sidebar"),
    Header = require("./header"),
    Tabs = require("./PageComponents/Tabs/tabs");

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , Route = Router.Route
    ,Link = Router.Link,
    Navigation=Router.Navigation;



var App = React.createClass({
    mixins: [ Navigation ],
    componentDidMount: function() {
        console.log("App-componentDidMount");
    },
    render() {

        console.log(JSON.stringify(this.props))
        return (
                <div className="wrapper">
                    <Header />
                    <Menu />
                    <div className="content-wrapper">
                        <Tabs/>
                        <RouteHandler />
                    </div>

                    <Footer />

                    <SideBar />

                    <div className='control-sidebar-bg'></div>

                </div>



        );
    }
});

module.exports = App;