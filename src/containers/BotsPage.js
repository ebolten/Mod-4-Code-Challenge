import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one


  render() {
    return (
      <div>
        {/* put your components here */}
        
        <BotCollection botList={this.props.botList} />

      </div>
    );
  }

}

export default BotsPage;
