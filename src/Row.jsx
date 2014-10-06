/** @jsx React.DOM */

var React = require('react');
var CustomPropTypes = require('./utils/CustomPropTypes');


var Row = React.createClass({
  propTypes: {
    componentClass: CustomPropTypes.componentClass.isRequired,
    display: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      componentClass: React.DOM.div,
      display: true
    };
  },

  render: function () {
    var componentClass = this.props.componentClass;

    // hide if display is false, show if undefined or true
    return this.transferPropsTo(
      <componentClass className="row"
                      style={{display: this.props.display==false ? 'none' : 'block'}}>
        {this.props.children}
      </componentClass>
    );
  }
});

module.exports = Row;
