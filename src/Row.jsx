var React = require('react');
var joinClasses = require('./utils/joinClasses');

var Row = React.createClass({
  propTypes: {
    componentClass: React.PropTypes.node.isRequired,
    display: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      componentClass: 'div',
      display: true
    };
  },

  render: function () {
    var ComponentClass = this.props.componentClass;

    // hide if display is false, show if undefined or true
    return (
      <ComponentClass {...this.props}
                      className={joinClasses(this.props.className, 'row')}
                      style={{display: this.props.display==false ? 'none' : 'block'}}>
        {this.props.children}
      </ComponentClass>
    );
  }
});

module.exports = Row;
