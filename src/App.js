import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import AppRouter from './router/AppRouter';
import 'normalize.css/normalize.css';

class App extends Component {



/*  learnAndGeneratePlugin = () => {
    
    this.state.mind.learn(this.state.examples);
    const pluginNeuronalNetwork = this.state.mind.download();
    
    const objectPlugin = {plugin: pluginNeuronalNetwork};

    console.log('toto ', objectPlugin);
    this.setState({pluginNeuronalNetwork: objectPlugin});
  }
*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Réseau de neurone</h1>
        </header>
        <div>
          <AppRouter />
        </div>
        <footer>
          Developped by Xavier Bordy
        </footer>
      </div>
    );
  }
}

export default App;
