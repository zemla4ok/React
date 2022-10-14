import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, age} = this.props;
    return <>{`${name}: ${age} years`}</>
  }
}

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

MyComponent.defaultProps = {
  name: "Dmitry"
};



const MyFuncComponent = ({name = "Dmitry", age}) => {
  return <>{`${name}: ${age} years`}</>
};

MyFuncComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};