'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reactabular = require('reactabular');

var Table = Reactabular.Table;
var Search = Reactabular.Search;
var SortColumn = Reactabular.sortColumn;
var Paginator = require('react-pagify');

var columns = [{
    property: 'id',
    header: 'Id',
    testprop: 'sdfsdfdsff'
}, {
    property: 'email',
    header: 'Email',
    cell: function cell(type) {
        var newtype = '+' + type;
        return newtype;
    }

}, {
    property: 'apikey',
    header: 'Apikey',
    classes: 'testColumn',
    cell: function cell(type) {
        var newtype = '+' + type;
        return 'ddd';
    }
}];

var data = require('../data/users'); /*[
                                     {
                                     name: 'React.js',
                                     type: 'library',
                                     description: 'Awesome library for handling view.',
                                     followers: 23252,
                                     worksWithReactabular: true,
                                     },
                                     {
                                     name: 'Angular.js',
                                     type: 'framework',
                                     description: 'Swiss-knife of frameworks. Kitchen sink not included.',
                                     followers: 35159,
                                     worksWithReactabular: false,
                                     },
                                     {
                                     name: 'Aurelia',
                                     type: 'framework',
                                     description: 'Framework for the next generation.',
                                     followers: 229,
                                     worksWithReactabular: false,
                                     }
                                     ];*/

var TablePage = React.createClass({
    displayName: 'TablePage',

    getInitialState: function getInitialState() {
        var _this = this;

        return {
            search: { column: '', query: '' },
            data: data,
            searchColumns: [{
                property: 'id',
                header: 'Id'
            }, {
                property: 'email',
                header: 'email'
            }],
            columns: columns,
            sortingColumn: null,
            header: {
                onClick: function onClick(column) {
                    console.log(column);
                    SortColumn(_this.state.columns, column, _this.setState.bind(_this));
                }
            },
            pagination: {
                page: 0,
                perPage: 10
            }
        };
    },

    onSearch: function onSearch(search) {
        this.setState({
            search: search
        });
    },

    onSelect: function onSelect(page) {

        var pagination = this.state.pagination || {};
        pagination.page = page;
        this.setState({
            pagination: pagination
        });
    },
    onPerPage: function onPerPage(e) {
        var pagination = this.state.pagination || {};

        pagination.perPage = parseInt(event.target.value, 10);

        this.setState({
            pagination: pagination
        });
    },

    rowClick: function rowClick(d, index) {
        return {
            onClick: function onClick() {
                console.log('row clicked ' + JSON.stringify(d) + ' index ' + index);
            },
            className: 'test'
        };
    },

    tableFirst: function tableFirst(amount) {
        var pagination = this.state.pagination;
        pagination.page = 0;
        this.setState({ pagination: pagination });
    },
    tableLast: function tableLast(amount) {
        var pagination = this.state.pagination;
        pagination.page = amount - 1;
        this.setState({ pagination: pagination });
    },
    tableNext: function tableNext(amount) {
        var pagination = this.state.pagination;
        if (pagination.page != amount - 1) {
            pagination.page += 1;
        }
        this.setState({ pagination: pagination });
    },
    tablePrev: function tablePrev(amount) {
        var pagination = this.state.pagination;
        if (pagination.page != 0) {
            pagination.page -= 1;
        }
        this.setState({ pagination: pagination });
    },

    render: function render() {
        var searchColumns = this.state.searchColumns;
        var header = this.state.header;
        var data = this.state.data;
        var pagination = this.state.pagination;

        if (this.state.search.query) {
            // apply search to data
            // alternatively you could hit backend `onChange`
            // or push this part elsewhere depending on your needs
            data = Search.search(data, columns, this.state.search.column, this.state.search.query);
        }

        data = SortColumn.sort(data, this.state.sortingColumn);

        var paginated = Paginator.paginate(data, pagination);

        return React.createElement(
            'div',
            null,
            React.createElement(
                'section',
                { className: 'content-header' },
                React.createElement(
                    'h1',
                    null,
                    'Table Page',
                    React.createElement(
                        'small',
                        null,
                        'it all starts here'
                    )
                ),
                React.createElement(
                    'ol',
                    { className: 'breadcrumb' },
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            Link,
                            { to: 'home' },
                            ' Home'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'active' },
                        'Table'
                    )
                )
            ),
            React.createElement(
                'section',
                { className: 'content' },
                React.createElement(
                    'div',
                    { className: 'box' },
                    React.createElement(
                        'div',
                        { className: 'box-header with-border' },
                        React.createElement(
                            'h3',
                            { className: 'box-title' },
                            'Check my Table '
                        ),
                        React.createElement(
                            'div',
                            { className: 'box-tools pull-right' },
                            React.createElement(
                                'button',
                                { className: 'btn btn-box-tool', 'data-widget': 'collapse', 'data-toggle': 'tooltip', title: 'Collapse' },
                                React.createElement('i', { className: 'fa fa-minus' })
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn btn-box-tool', 'data-widget': 'remove', 'data-toggle': 'tooltip', title: 'Remove' },
                                React.createElement('i', { className: 'fa fa-times' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'box-body' },
                        React.createElement(
                            'div',
                            { className: 'per-page-container' },
                            'Per page ',
                            React.createElement('input', { type: 'text', defaultValue: pagination.perPage, onChange: this.onPerPage })
                        ),
                        React.createElement(
                            'div',
                            { className: 'search-container' },
                            'Search ',
                            React.createElement(Search, { columns: searchColumns, data: data, onChange: this.onSearch })
                        ),
                        React.createElement(
                            'div',
                            { className: 'table-responsive' },
                            React.createElement(
                                Table,
                                { header: header, row: this.rowClick, className: 'table table-striped table-hover ', columns: columns, data: paginated.data },
                                React.createElement(
                                    'tfoot',
                                    null,
                                    React.createElement(
                                        'tr',
                                        null,
                                        React.createElement(
                                            'td',
                                            null,
                                            'Total'
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            'One'
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            'Two'
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-8' },
                                paginated.page,
                                React.createElement(
                                    'span',
                                    null,
                                    ' of '
                                ),
                                paginated.amount
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-4' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        React.createElement(
                                            'button',
                                            { type: 'button', onClick: this.tableFirst.bind(this, paginated.amount), className: 'btn btn-default' },
                                            'First'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        React.createElement(
                                            'button',
                                            { type: 'button', onClick: this.tablePrev.bind(this, paginated.amount), className: 'btn btn-default' },
                                            'Previous'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-md-1 pagination' },
                                        React.createElement(Paginator, {
                                            page: paginated.page,
                                            pages: paginated.amount,
                                            beginPages: 3,
                                            endPages: 3,
                                            showPrevNext: false,
                                            prevClassName: 'pagify-prev btn btn-default',
                                            nextClassName: 'pagify-next btn btn-default',
                                            onSelect: this.onSelect })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        React.createElement(
                                            'button',
                                            { type: 'button', onClick: this.tableNext.bind(this, paginated.amount), className: 'btn btn-default' },
                                            'Next'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-md-1' },
                                        React.createElement(
                                            'button',
                                            { type: 'button', onClick: this.tableLast.bind(this, paginated.amount), className: 'btn btn-default' },
                                            'Last'
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'box-footer' },
                        'Footer This is my footer'
                    )
                )
            )
        );
    }
});

module.exports = TablePage;

/*{
    property: 'followers',
    header: 'Followers',
    // accuracy per hundred is enough for demoing
    cell: (followers) => followers - (followers % 100),
    search: (followers) => followers - (followers % 100)
},
{
    property: 'worksWithReactabular',
    header: '1st Class Reactabular',
    // render utf ok if works
    cell: (works) => works && <span>&#10003;</span>,
},*/