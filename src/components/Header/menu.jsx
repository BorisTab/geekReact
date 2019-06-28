import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    const {items} = this.props;
    return (
      <ul>
        {items.map((item) => <li><Link to={item.url}>{item.name}</Link></li>)}
      </ul>
    );
  }
}
