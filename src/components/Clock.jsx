import React, {PureComponent} from 'react';

export default class Clock extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  // Вызов сразу после отрисовки
  componentDidMount() {
    this.intervalId = setInterval(() =>{
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  // Вызов перед удалением компонетнта
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const {date} = this.state;
    return (
      <div>
        <h2>{date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
