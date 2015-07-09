var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../../PageComponents/Tabs/tabsActions');
import AboutActions from './aboutActions';
import AboutStore from './aboutStore';

var AboutPage = React.createClass({
    getInitialState:function(){
        var aboutState = AboutStore.getState();
        return {
            about:{current:aboutState.about.current}
        };
    },
    onLinkClick:function(link){
        console.log(link);
        TabsActions.addTabs(link);

    },
    componentWillUnmount:function()
    {
        AboutActions.saveCurrent(this.state.about.current)
    },
    handleChange: function(event) {
        this.setState({about:{current:{input: event.target.value}}});
    },
    onClose:function(){
        this.setState({about:{current:{input:""}}})
    },
    render() {

        var aboutCurrentData = this.state.about.current.input;
        console.log("dataAbout "+aboutCurrentData);
        return (
            <div>
                <section className="content-header">
                    <h1>
                        About Page
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
                            <Link to="aboutOverview" params={{name:"testParam"}} onClick={this.onLinkClick.bind(this,{name:'aboutOverview',link:'/aboutOverview/:name',params:{name:"testParam"}})}>Click me to go to dashboard</Link>

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

module.exports = AboutPage;