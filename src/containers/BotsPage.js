import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        {/* put your components here */}

        <YourBotArmy renderBot={this.props.delBotArmy} botArmy={this.props.botArmy} />

        {
          this.props.renderedBot != null ? <BotSpecs renderBot={this.props.renderBot} addBotArmy={this.props.addBotArmy} bot={this.props.renderedBot} /> : <BotCollection renderBot={this.props.renderBot} addBotArmy={this.props.addBotArmy} botList={this.props.botList} />
        }

      </div>
    );
  }

}

export default BotsPage;
