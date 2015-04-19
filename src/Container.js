import React from 'react';
import classNames from 'classnames';

const Container = React.createClass({
  propTypes: {
    componentClass: React.PropTypes.node.isRequired
  },

  getDefaultProps() {
  return {
    componentClass: 'div'
  };
},

render() {
  let ComponentClass = this.props.componentClass;

  return (
    <ComponentClass {...this.props} className={classNames(this.props.className, 'container')}>
  {this.props.children}
</ComponentClass>
);
}
});

export default Container;
