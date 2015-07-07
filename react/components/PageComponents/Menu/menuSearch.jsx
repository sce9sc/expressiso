var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MenuSearch = React.createClass({
    getInitialState: function() {
        return {treeActiveState:false};
    },
    render() {

        return (
            <form action="#" method="get" className="sidebar-form">
                <div className="input-group">
                    <input type="text" name="q" className="form-control" placeholder="Search..."/>
                    <span className="input-group-btn">
                        <button type='submit' name='search' id='search-btn' className="btn btn-flat"><i
                        className="fa fa-search"></i></button>
                    </span>
                </div>
            </form>
        );
    }
});

module.exports = MenuSearch;