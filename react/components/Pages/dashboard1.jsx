var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

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
                    <ol className="breadcrumb">
                        <li><Link to="home"> Home</Link></li>
                        <li className="active"><Link to="home"> DashBoard</Link></li>
                    </ol>
                </section>

                <section className="content">
                    <div>
                        <div onClick={this.handleClick}>
                            Dashboard (click me)(currently {clicked})
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

