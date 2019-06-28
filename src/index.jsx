import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './assets/style.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Clock from './components/Clock';
import Counter from './components/Counter';
import PostsList from './containers/PostsListContainer';
import Post from './containers/PostContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      inputName: '',
    };
  }

  handleMinusClick = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };
  handlePlusClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  handleChange = (fieldName) => (e) => {
    this.setState({
      [fieldName]: e.target.value,
    });
  };
  render() {
    const {number, inputName} = this.state;
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route exact path="/" component={Clock} />
          <Route exact path="/posts" component={PostsList} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
        <input type="text" value={inputName}
          onChange={this.handleChange('inputName')}/>
        <Counter
          onPlusClick={this.handlePlusClick}
          onMinusClick={this.handleMinusClick}
          number={number}/>
      </div>
    );
  }
}

ReactDom.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root'));
