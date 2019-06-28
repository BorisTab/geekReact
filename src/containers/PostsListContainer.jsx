import React, {PureComponent} from 'react';
import Loading from 'components/Loading';
import PostsList from 'components/Posts';
import {connect} from 'react-redux';
import {postLoadAction} from 'actions/posts';

class PostsListContainer extends PureComponent {
  componentDidMount() {
    const {loadPosts} = this.props;
    loadPosts();
  };

  render() {
    const {posts, loading} = this.props;
    return (
      loading ? <Loading/> : <PostsList posts={posts} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    loading: state.posts.loading,
    posts: state.posts.items,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    ...ownProps,
    loadPosts: () => postLoadAction(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
