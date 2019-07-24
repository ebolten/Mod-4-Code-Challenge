import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  //set state elements
  constructor() {
    super()
    this.state={
      YourBotArmy:[],
      BotCollection:[],
      RenderBot:null
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

  renderBot = (bot) => {
    this.setState({
      RenderBot:bot
    })
  }

  //deletes a bot from bot army
  delBotArmy = (bot) => {
    this.setState({
      YourBotArmy:this.state.YourBotArmy.filter(curBot => curBot.id != bot.id)
    })
  }

  //add bots to bot army
  addBotArmy = (bot) => {
    this.setState({
      YourBotArmy:[...this.state.YourBotArmy,bot]
    })
  }

  render() {
    return (
      <div className="App">

        <BotsPage renderedBot={this.state.RenderBot} renderBot={this.renderBot} delBotArmy={this.delBotArmy} botArmy={this.state.YourBotArmy} addBotArmy={this.addBotArmy} botList={this.state.BotCollection} />

      </div>
    );
  }
}

export default App;
