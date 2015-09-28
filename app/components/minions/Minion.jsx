var React = require('react');
var Paper = require('material-ui/lib/paper');
var classnames = require('classnames');
var CollapsedStructuredElement = require('elements/CollapsedStructuredElement');

var rowStyles = require('components/RowLayout.less');
var styles = require('./Minion.less');

var Event = React.createClass({
    propTypes: {
        minion: React.PropTypes.object.isRequired
    },

    renderHeader() {
        return (
            <div className={classnames(styles.header)}>
                <div>
                    <span className={styles.minionlabel}>Minion:</span>
                    <span>{this.props.minion.id}</span>
                </div>
            </div>
        );
    },

    renderBody() {
        return (
            <div>
                <CollapsedStructuredElement
                    arraysCollapsed={true}
                    element={{ grains: this.props.minion.grains }}/>
            </div>
        );
    },

    render() {
        return (
            <Paper className={classnames(rowStyles.this, styles.this)} zDepth={2}>
                {this.renderHeader()}
                {this.renderBody()}
            </Paper>
        );
    }
});

module.exports = Event;
