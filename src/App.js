import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  //set state elements
  constructor() {
    super()
    this.state={
      YourBotArmy:[],
      BotCollection:[]
    }
  }

  //when dom is loaded, fetch bots and update state
  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        BotCollection:data
      })
    })
  }

  render() {
    return (
      <div className="App">

        <BotsPage botList={this.state.BotCollection} />

      </div>
    );
  }
}

export default App;
