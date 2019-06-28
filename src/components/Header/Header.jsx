import React from 'react';
import './Header.css';
import Menu from './Menu';

// Stateless
function Header(props) {
  const className = props.size === 'mini' ? 'header-mini' : 'header-maxi';
  const items = [
    {name: 'Home', url: '/'},
    {name: 'Posts', url: '/posts'},
  ];
  return (
    <div className={className}>
      Header
      <div>{props.children}</div>
      <Menu items={items}/>
    </div>
  );
}

export default Header;
