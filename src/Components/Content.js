//Class Component Example
import React from "react";

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* calling the function passed as a prop */}
        <button onClick={()=>this.props.onLogin("I am logged in")}>Login</button>
      </div>
    );
  }
}

export default Content;