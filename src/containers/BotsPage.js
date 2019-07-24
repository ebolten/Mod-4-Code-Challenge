import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        {/* put your components here */}

        <YourBotArmy delBotArmy={this.props.delBotArmy} botArmy={this.props.botArmy} />
        <BotCollection addBotArmy={this.props.addBotArmy} botList={this.props.botList} />

      </div>
    );
  }

}

export default BotsPage;
