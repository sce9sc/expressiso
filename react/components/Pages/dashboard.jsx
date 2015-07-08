var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TabsActions = require('../PageComponents/Tabs/tabsActions');


var DashBoardPage = React.createClass({
    timeoutFn:function(){
        this.setState({data: "test"});
        this.setState({display:true});
        console.log("loaded")
    },
    getInitialState: function() {
        return {data: [],clicked:false,display:true};
    },
    componentDidMount: function() {
        console.log("DashBoard-componentDidMount");

        //(this.timeoutFn,6000)
    },
    componentWillMount: function() {
       console.log('DashBoard-componentWillMount');
    },
    componentWillUnmount: function() {
        //TabsActions.removeTabs({name:'dashboard'})
        console.log('DashBoard-componentWillUnmount');
    },
    handleClick : function(event){
        this.setState({clicked: !this.state.clicked});
    },
    render() {
        var clicked = this.state.clicked?'true':'false';

        var displayContent = (this.state.display)?"block":"none";
        var displayLoading = (this.state.display)?"none":"block";
        return (
            <div>
            <div style={{"display":displayLoading}}>Loading Please Wait</div>
            <div style={{"display":displayContent}}>
                <section className="content-header">
                    <h1>
                        DashBoard
                        <small>it all starts here</small>
                    </h1>
                </section>

                <section className="content">

                    <div className="row">
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-aqua"><i className="ion ion-ios-gear-outline"></i></span>
                                <div className="info-box-content">
                                    <span className="info-box-text">Offers</span>
                                    <span className="info-box-number">9099</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-red"><i className="fa fa-google-plus"></i></span>
                                <div className="info-box-content">
                                    <span className="info-box-text">Products</span>
                                    <span className="info-box-number">41</span>
                                </div>
                            </div>
                        </div>


                        <div className="clearfix visible-sm-block"></div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <div className="info-box">
                                <span className="info-box-icon bg-green"><i className="fa fa-money"></i></span>
                                <div className="info-box-content">
                                    <span className="info-box-text">Budget</span>
                                    <span className="info-box-number">760</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Title</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                                <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>




                        <div className="box-body">
                            Start creating your amazing application!
                        </div>
                        <div className="box-footer">
                            Footer
                        </div>
                    </div>

                </section>
            </div>
        </div>
        );
    }
});

module.exports = DashBoardPage;

