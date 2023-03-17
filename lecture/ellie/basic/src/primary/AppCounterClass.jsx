import React from 'react';
import './App.css';
import Counter from './components/Counter';

export default class AppCounterClass extends React.Component {
  state = {count:0}; 

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log('컴포넌트가 마운드되었습니다.');
  }

  componentWillUnmount() {
    console.log('컴포넌트가 곧 언마운트될 예정입니다.');
  }

  render() {
    return (
      <>
        <div className="counter-banner">
          Total Count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <Counter total={this.state.count} onClick={this.handleClick} />
        <Counter total={this.state.count} onClick={this.handleClick} />
      </>
    );
  }
}