var React = require("react")
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Reactabular = require('reactabular')

var Table = Reactabular.Table;
var Search = Reactabular.Search;
var SortColumn = Reactabular.sortColumn;
var Paginator = require('react-pagify');

var columns = [
    {
        property: 'id',
        header: 'Id',
        testprop:"sdfsdfdsff"
    },
    {
        property: 'email',
        header: 'Email',
        cell: function(type){
            var newtype = '+'+type;
            return newtype;
        }

    },
    {
        property: 'apikey',
        header: 'Apikey',
        classes:'testColumn',
        cell: function(type){
            var newtype = '+'+type;
            return "ddd";
        }
    },
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
];

var data = require('../data/users')/*[
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
    getInitialState() {
        return {
                search: {column: '', query: ''},
                data:data,
            searchColumns:[{
                property: 'id',
                header: 'Id'
            },{
                property: 'email',
                header: 'email'
            }
            ],
                columns:columns,
                sortingColumn:null,
                header: {
                    onClick: (column) => {
                        console.log(column)
                        SortColumn(
                            this.state.columns,
                            column,
                            this.setState.bind(this)
                        );
                    },
                },
                pagination: {
                    page: 0,
                    perPage: 10
                }
                };
    },

    onSearch(search) {
        this.setState({
            search: search
        });
    },

    onSelect(page) {

        var pagination = this.state.pagination || {};
        pagination.page = page;
        this.setState({
            pagination: pagination
        });
    },
    onPerPage(e) {
        var pagination = this.state.pagination || {};

        pagination.perPage = parseInt(event.target.value, 10);

        this.setState({
            pagination: pagination
        });
    },

    rowClick(d,index){
        return {
            onClick:function(){
                    console.log('row clicked '+JSON.stringify(d) +" index " +index)
                    },
            className:"test"
        }

    },

    tableFirst(amount){
        var pagination = this.state.pagination;
        pagination.page = 0
        this.setState({pagination:pagination});
    },
    tableLast(amount){
        var pagination = this.state.pagination;
        pagination.page = amount-1
        this.setState({pagination:pagination});
    },
    tableNext(amount){
        var pagination = this.state.pagination;
        if(pagination.page!=amount-1)
        {pagination.page += 1;}
        this.setState({pagination:pagination});

    },
    tablePrev(amount){
        var pagination = this.state.pagination;
        if(pagination.page!=0) {
            pagination.page -= 1
        }
        this.setState({pagination:pagination});

    },

    render() {
        var searchColumns = this.state.searchColumns;
        var header = this.state.header;
        var data = this.state.data;
        var pagination = this.state.pagination;

        if (this.state.search.query) {
            // apply search to data
            // alternatively you could hit backend `onChange`
            // or push this part elsewhere depending on your needs
               data = Search.search(
                    data,
                    columns,
                    this.state.search.column,
                    this.state.search.query
                );

        }

        data = SortColumn.sort(data, this.state.sortingColumn);

        var paginated = Paginator.paginate(data, pagination);

        return (
            <div>
                <section className="content-header">
                    <h1>
                        Table Page
                        <small>it all starts here</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li><Link to="home"> Home</Link></li>
                        <li className="active">Table</li>
                    </ol>
                </section>

                <section className="content">
                    <div className="box">
                        <div className="box-header with-border">
                            <h3 className="box-title">Check my Table </h3>
                            <div className="box-tools pull-right">
                                <button className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse"><i className="fa fa-minus"></i></button>
                                <button className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove"><i className="fa fa-times"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className='per-page-container'>
                                Per page <input type='text' defaultValue={pagination.perPage} onChange={this.onPerPage}></input>
                            </div>

                            <div className='search-container'>
                                Search <Search columns={searchColumns} data={data} onChange={this.onSearch}></Search>
                            </div>
                            <div className="table-responsive">
                                <Table header={header} row={this.rowClick} className="table table-striped table-hover " columns={columns} data={paginated.data} >
                                    <tfoot>
                                    <tr>
                                        <td>
                                           Total
                                        </td>
                                        <td>
                                            One
                                        </td>
                                        <td>
                                            Two
                                        </td>
                                    </tr>
                                    </tfoot>
                                </Table>
                            </div>
                            <div className="row">
                                <div className='col-md-8'>{paginated.page}<span> of </span>{paginated.amount}</div>
                                <div className='col-md-4'>
                                    <div className="row">
                                        <div className="col-md-1" >
                                            <button type="button" onClick={this.tableFirst.bind(this,paginated.amount)} className="btn btn-default">First</button>
                                        </div>
                                        <div className="col-md-1" >
                                            <button type="button" onClick={this.tablePrev.bind(this,paginated.amount)} className="btn btn-default">Previous</button>
                                        </div>
                                        <div className="col-md-1 pagination" >
                                            <Paginator
                                                page={paginated.page}
                                                pages={paginated.amount}
                                                beginPages={3}
                                                endPages={3}
                                                showPrevNext={false}
                                                prevClassName="pagify-prev btn btn-default"
                                                nextClassName="pagify-next btn btn-default"
                                                onSelect={this.onSelect}></Paginator>
                                        </div>
                                        <div className="col-md-1" >
                                            <button type="button" onClick={this.tableNext.bind(this,paginated.amount)} className="btn btn-default">Next</button>
                                        </div>
                                        <div className="col-md-1">
                                            <button type="button" onClick={this.tableLast.bind(this,paginated.amount)} className="btn btn-default">Last</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div className="box-footer">
                            Footer This is my footer
                        </div>
                    </div>

                </section>
            </div>
        );
    }
});

module.exports = TablePage;