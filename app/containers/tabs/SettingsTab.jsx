var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);

var tabStyle = require('./Tab.less');

var SettingsTab = React.createClass({
    mixins: [FluxMixin],
    render() {
        return (<div className={tabStyle.this}>settings tab</div>);
    }
});

module.exports = SettingsTab;