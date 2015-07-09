var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var State = ReactRouter.State;
var Navigation = ReactRouter.Navigation
var TabsActions = require('../../PageComponents/Tabs/tabsActions');
var TabsStore = require('../../PageComponents/Tabs/tabsStore');
import AboutOverviewActions from './aboutOverviewActions';
import AboutOverviewStore from './aboutOverviewStore';

var AboutOverviewPage = React.createClass({
    mixins:[State,Navigation],

    getInitialState:function(){
        var name = this.getParams().name;

        var aboutState = AboutOverviewStore.getState();
        return {
            about:{current:aboutState.about.current},
            name:name
        };
    },
    onLinkClick:function(link){
        console.log(link);
        TabsActions.addTabs(link);

    },
    componentWillUnmount:function()
    {
        AboutOverviewActions.saveCurrent(this.state.about.current)
    },
    handleChange: function(event) {
        this.setState({about:{current:{input: event.target.value}}});
    },
    onClose:function(){
        //this.setState({about:{current:{input:""}}})
        this.state.about.current = {input:""}
        console.log(TabsStore.getTabIndex('about'));
        console.log(TabsStore.getTabs());
        var prevTab = TabsStore.getPreviousTab();
        console.log(prevTab);
        TabsActions.removeTabs(prevTab.currentTab);
        if(prevTab.index !=-1) {
            this.transitionTo(prevTab.prevTab.link);
        }

    },
    render() {
        var name = this.state.name
        var aboutCurrentData = this.state.about.current.input;
        return (
            <div>
                <section className="content-header">
                    <h1>
                        AboutOverView Page
                        <small>it all starts here</small>
                    </h1>
                </section>

                <section className="content">
                    <div>sadad</div>

                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Title</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                                <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <input type="text" className="testInput" onChange={this.handleChange} value={aboutCurrentData} />
                            <div>{name}</div>
                            <Link to="dashboard" onClick={this.onLinkClick.bind(this,{name:'dashboard',link:'/dashboard'})}>Click me to go to dashboard</Link>
                            <button onClick={this.onClose}>Close</button>
                        </div>
                        <div className="box-footer">
                            Footer
                        </div>
                    </div>

                </section>
            </div>
        );
    }
});

module.exports = AboutOverviewPage;