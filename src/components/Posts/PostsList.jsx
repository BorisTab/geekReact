import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import {Link} from "react-router-dom";

export default class PostsList extends PureComponent {
  static propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          body: PropTypes.string,
        })
    ),
    onLoadClick: PropTypes.func,
  };

  static defaultProps = {
    posts: [],
  };

  handleOnClick = (e) => {
    const {onLoadClick} = this.props;
    if (typeof onLoadClick === 'function') {
      onLoadClick();
    }
    e.preventDefault();
  };

  render() {
    const {posts} = this.props;
    return (
      <div>
        <ul>
          {posts.map((post) => <li key={post.id}><Link to={`posts/${post.id}`}><Post post={post}/></Link></li>)}
        </ul>
        <button onClick={this.handleOnClick}>Load more</button>
      </div>
    );
  }
}
