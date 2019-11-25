import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state = {
      allSushi: [],
      currentSushi: [],
      index: 0,
      eatenSushi: [],
      budget: 100
    }
  }

  onMoreSushi = () => { 
    let newIndex = this.state.index + 4
    let moreSushi = this.state.allSushi.slice(newIndex, newIndex + 4)

    this.setState({
      index: newIndex,
      currentSushi: moreSushi
    })
  }

  onEatSushi = (sushiObj) => {
    let newBudget = this.state.budget - sushiObj.price 
    
    if (newBudget < 0) {
      alert("You're Broke!")
    } else {this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      budget: newBudget})
    }
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiArr => this.setState({
      allSushi: sushiArr,
      currentSushi: sushiArr.slice(this.state.index, this.state.index + 4)
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  currentSushi={this.state.currentSushi} onMoreSushi={this.onMoreSushi} onEatSushi={this.onEatSushi} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
      </div>
    );
  }
}

export default App;