var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
//var rd3 = require('react-d3-components');
//var LineChart = rd3.LineChart;


var data = {
    title: {
        text: 'Monthly Average Temperature',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        x: -20
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (�C)'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: '�C'
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'New York',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
    }, {
        name: 'Berlin',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
}

var ChartsPage = React.createClass({

    getInitialState() {
      return{chartData:data}

    },
    componentDidMount(){
        var cont = $('#highchartContainer');
        cont.highcharts(data);

    },
    changeChartData(){
        var cont = $('#highchartContainer');
        var mydata = this.state.chartData;
        mydata.title.text = "This is a test"
        cont.highcharts(data);
    },
    render() {
        return (
            <div>
                <section className="content-header">
                    <h1>
                        Charts Page
                        <small>it all starts here 1</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="home"> Home</Link></li>
                        <li className="active">Chart</li>
                    </ol>
                </section>

                <section className="content">
                    <div>sadad</div>

                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">This is my Chart Title</h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                                <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div onClick={this.changeChartData}>change Data</div>
                            <div id="highchartContainer"></div>
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

module.exports = ChartsPage;