import React, {PureComponent} from 'react';

export default class Counter extends PureComponent {
  render() {
    const {number, onPlusClick, onMinusClick} = this.props;
    return (
      <div>
        <button onClick={onPlusClick}>+</button>
        {number}
        <button onClick={onMinusClick}>-</button>
      </div>
    );
  }
}
