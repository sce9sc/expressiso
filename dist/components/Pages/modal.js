'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Modal = require('react-bootstrap/lib/Modal');
var Popover = require('react-bootstrap/lib/Popover');
var Tooltip = require('react-bootstrap/lib/Tooltip');
var Button = require('react-bootstrap/lib/Button');
var OverlayTrigger = require('react-bootstrap/lib/OverlayTrigger');

var ModalPage = React.createClass({
    displayName: 'ModalPage',

    getInitialState: function getInitialState() {
        return { showModal: false };
    },

    close: function close() {
        this.setState({ showModal: false });
    },

    open: function open() {
        this.setState({ showModal: true });
    },

    render: function render() {
        var popover = React.createElement(
            Popover,
            { title: 'popover' },
            'very popover. such engagement'
        );
        var tooltip = React.createElement(
            Tooltip,
            null,
            'wow.'
        );

        return React.createElement(
            'div',
            null,
            React.createElement(
                'section',
                { className: 'content-header' },
                React.createElement(
                    'h1',
                    null,
                    'About Page',
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
                        'About'
                    )
                )
            ),
            React.createElement(
                'section',
                { className: 'content' },
                React.createElement(
                    'div',
                    null,
                    'sadad'
                ),
                React.createElement(
                    'div',
                    { className: 'box' },
                    React.createElement(
                        'div',
                        { className: 'box-header with-border' },
                        React.createElement(
                            'h3',
                            { className: 'box-title' },
                            'Title'
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
                            null,
                            React.createElement(
                                'p',
                                null,
                                'Click to get the full Modal experience!'
                            ),
                            React.createElement(
                                Button,
                                {
                                    bsStyle: 'primary',
                                    bsSize: 'large',
                                    onClick: this.open
                                },
                                'Launch demo modal'
                            ),
                            React.createElement(
                                Modal,
                                { show: this.state.showModal, onHide: this.close },
                                React.createElement(
                                    Modal.Header,
                                    { closeButton: true },
                                    React.createElement(
                                        Modal.Title,
                                        null,
                                        'Modal heading'
                                    )
                                ),
                                React.createElement(
                                    Modal.Body,
                                    null,
                                    React.createElement(
                                        'h4',
                                        null,
                                        'Text in a modal'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
                                    ),
                                    React.createElement(
                                        'h4',
                                        null,
                                        'Popover in a modal'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'there is a ',
                                        React.createElement(
                                            OverlayTrigger,
                                            { overlay: popover },
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'popover'
                                            )
                                        ),
                                        ' here'
                                    ),
                                    React.createElement(
                                        'h4',
                                        null,
                                        'Tooltips in a modal'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'there is a ',
                                        React.createElement(
                                            OverlayTrigger,
                                            { overlay: tooltip },
                                            React.createElement(
                                                'a',
                                                { href: '#' },
                                                'tooltip'
                                            )
                                        ),
                                        ' here'
                                    ),
                                    React.createElement('hr', null),
                                    React.createElement(
                                        'h4',
                                        null,
                                        'Overflowing text to show scroll behavior'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
                                    ),
                                    React.createElement(
                                        'p',
                                        null,
                                        'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.'
                                    )
                                ),
                                React.createElement(
                                    Modal.Footer,
                                    null,
                                    React.createElement(
                                        Button,
                                        { onClick: this.close },
                                        'Close'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'box-footer' },
                        'Footer'
                    )
                )
            )
        );
    }
});

module.exports = ModalPage;