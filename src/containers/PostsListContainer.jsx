import React, {PureComponent} from 'react';
import Loading from '../components/Loading';
import PostsList from '../components/Posts';

export default class PostsListContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      page: 1,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=3&_page=1')
        .then((response) => response.json())
        .then((posts) => {
          this.setState({posts, loading: false, page: 2});
        })
        .catch(() => {
          this.setState({posts: [], loading: false});
        });
  }

  handleLoadClick = () => {
    const {page, posts} = this.state;

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3&_page=${page}`)
        .then((response) => response.json())
        .then((receivedPosts) => {
          this.setState({
            posts: posts.concat(receivedPosts),
            page: page + 1,
          });
        });
  };

  render() {
    const {loading, posts} = this.state;
    return (
      loading ? <Loading/> :
        <PostsList posts={posts} onLoadClick={this.handleLoadClick}/>
    );
  }
}
