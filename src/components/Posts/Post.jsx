import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {post} = this.props;
    return (
      <div>
        <h3>{ post.title }</h3>
        <p>{ post.body }</p>
      </div>
    );
  }
}
