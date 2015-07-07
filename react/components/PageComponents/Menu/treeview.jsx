var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var TreeLink = require('./treelink')


var TreeView = React.createClass({
    getInitialState: function() {
        var links = this.props.links;
        var focus = this.props.focus;
        var treestate = (links.indexOf(focus)>-1)?'active':"";
        return {
            treeActiveState:treestate,
            togglePressed:false
        };
    },
    toggleActiveState:function(event){
       this.setState({
           treeActiveState:!this.state.treeActiveState,
           togglePressed:!this.state.tooglePressed
       })
    },
    render() {
        var links = this.props.links;
        var name = this.props.name;
        var focus = this.props.focus;
        var treestate = this.state.treeActiveState?'active':"";
        var treestateBool = (links.indexOf(focus)>-1)
        console.log(treestateBool +'='+ treestate)
        if(treestateBool && !this.state.togglePressed){
            treestate ="active";
        }




        return (
            <li className={'treeview '+ treestate}>
                <a href="javascript:;" onClick={this.toggleActiveState}>
                    <i className={"fa "+this.props.className}></i> <span>{name}</span> <i className="fa fa-angle-left pull-right"></i>
                </a>
                <ul className="treeview-menu">
                    {
                        links.map(function(link,index) {
                            var keyName = name+link
                            return (<TreeLink key={keyName} focus={focus} name={name} link={link} />)
                        })
                    }
                </ul>
            </li>
        );
    }
});

module.exports = TreeView;