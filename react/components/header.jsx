var React = require("react");
var HeaderNav = require("./PageComponents/headerNav");

var Header = React.createClass({
    render() {
        return (
            <header className="main-header">
                <a href="AdminLTE-2.1.1/index2.html" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Admin</b>LTE</span>
                </a>
                <HeaderNav />
            </header>
        );
    }
});

module.exports = Header;