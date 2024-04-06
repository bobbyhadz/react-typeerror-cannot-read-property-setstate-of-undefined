import './App.css';

import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  // ✅ Works because we used an arrow function
  // to declare the method
  toggleIsActive = () => {
    this.setState({isActive: !this.state.isActive});
  };

  render() {
    console.log(this.state.isActive);
    return (
      <div>
        <button onClick={this.toggleIsActive}>Toggle</button>
      </div>
    );
  }
}

export default App;
