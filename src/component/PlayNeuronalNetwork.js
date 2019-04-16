import React, {Component} from 'react';
import character from '../utils/character';
import Mind from './Mind';
import ShowWeightNeuralNetwork from './ShowWeightNeuralNetwork';


const aStr =  
  '.#####.\n' +
  '#.....#\n' +
  '#.....#\n' +
  '#######\n' +
  '#.....#\n' +
  '#.....#\n' +
  '#.....#\n'
;

const a = character(
  '.#####.' +
  '#.....#' +
  '#.....#' +
  '#######' +
  '#.....#' +
  '#.....#' +
  '#.....#'
)

const b = character(
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.' +
  '#.....#' +
  '#.....#' +
  '######.'
)

const b1 = character(
  '#######' +
  '#.....#' +
  '#.....#' +
  '#######' +
  '#.....#' +
  '#.....#' +
  '#######'
)

const c = character(
  '#######' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#......' +
  '#######'
)

const xor = [
  { input: [0, 0], output: [ 0 ] },
  { input: [0, 1], output: [ 1 ] },
  { input: [1, 0], output: [ 1 ] },
  { input: [1, 1], output: [ 0 ] }
];

class PlayNeuronalNetwork extends Component {
    state = {
        examples: [],
        mind: undefined,
        valuesToTest: undefined,
        valueSelected: 'none',
        result: '',
        displayStructure: false
    }

    map = (letter) => {
        if (letter === 'a') return [ 0.1 ];
        if (letter === 'b') return [ 0.3 ];
        if (letter === 'c') return [ 0.5 ];
        return 0;  
    }

    changeValueToTestOne = (event) => {
        const valueOne = event.target.value;
        this.setState(previousState => 
          {
            const v = previousState.valuesToTest;
            v[0] = parseInt(valueOne, 10);
            return {valuesToTest: v, result: ''}
          }
        );
      }
    
      changeValueToTestTwo = (event) => {
        const valueTwo = event.target.value;
        this.setState(previousState => 
          {
            const v = previousState.valuesToTest;
            v[1] = parseInt(valueTwo, 10);
            return {valuesToTest: v, result: ''}
          }
        );
      }
    
      changeLetter = (event) => {
        const val = event.target.value.replace(/\n/g, '').replace(new RegExp(" ", 'g'), "");
        const valuesToTest = character(val);
        if(valuesToTest && valuesToTest.length === 49){
          this.setState({valuesToTest, result: ''});
        }else{
          this.setState({valuesToTest: undefined, result: ''});
        }

      }

      launchPrediction = () => {
        const plugin = this.learnAndGeneratePlugin();
        if(this.state.valuesToTest){
          this.predictMyValue(plugin);
        }else{
          alert("L'entrée n'est pas valide")
        }  
      }
    
    
      predictMyValue = (plugin) => {
        const m = this.state.mind;
        m.upload(plugin.plugin);
        let result = m.predict(this.state.valuesToTest);

        if(this.state.valueSelected === 'xor')
          result = '' + Math.round(result[0]);
        if(this.state.valueSelected === 'ocr'){
          const valueRound =  result[0] * 10;
          if(valueRound < 2)result = 'a';
          if(2 < valueRound && valueRound < 4)result = 'b';
          if(4 < valueRound)result = 'c';
        }
        
        this.setState({result});
      }

      learnAndGeneratePlugin = () => {
        this.state.mind.learn(this.state.examples);
        const pluginNeuronalNetwork = this.state.mind.download();
        const objectPlugin = {plugin: pluginNeuronalNetwork};

        return objectPlugin; 
      }

      displayStructure = () => {
        this.setState(previousState => {
          return {displayStructure: !previousState.displayStructure};
        });
      }

      selectTypeOfNetwork = (event) => {
        const valueSelected = event.target.value;
        if(valueSelected === 'xor'){
          const mind = new Mind();
          const valuesToTest = [0, 0];
          this.setState({examples: xor, mind, valuesToTest, valueSelected, result: '', displayStructure: false});
        }
        if(valueSelected === 'ocr'){
          const ocr = [
            { input: a, output: this.map('a') },
            { input: b, output: this.map('b') },
            { input: b1, output: this.map('b') },
            { input: c, output: this.map('c') }
          ];
          const mind = new Mind({ activator: 'sigmoid' });
          const valuesToTest = a;
          this.setState({examples: ocr, mind, valuesToTest, valueSelected, result: '', displayStructure: false});
        }
      }

    render() {
        return (
            <div>
                <h3>Quel type de réseau de neurone voulez-vous utiliser?</h3>
                <select onChange={this.selectTypeOfNetwork} value={this.state.valueSelected} >
                    <option value="none" disabled>Select your option</option>
                    <option value="xor">Ou exclusif (xor)</option>
                    <option value="ocr">Reconnaissance de caractère (ocr)</option>
                </select>

                {
                    this.state.valueSelected &&
                    <div>
                        <div className="horizontal-layout"> 
                          <p>Choisir une valeur à prédire et</p>
                          <button className="button" onClick={this.launchPrediction}>Lancer la prédiction</button>
                        </div>
                        {
                            this.state.valueSelected === 'xor' &&
                            <div>
                                <select onChange={this.changeValueToTestOne}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                                X
                                <select onChange={this.changeValueToTestTwo}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                </select>
                            </div>
                        }
                        {
                            this.state.valueSelected === 'ocr' &&
                            <div>
                                <textarea className="letter-presentation" rows="10" cols="20" onChange={this.changeLetter} defaultValue={aStr} />
                            </div>
                        }
                        
                        <p className="result">Résultat: {this.state.result}</p>
                        {this.state.result && <button className="button" onClick={this.displayStructure}>Afficher la structure du réseau de neurone</button>}
                        {
                          this.state.displayStructure && <ShowWeightNeuralNetwork pluginNeuronalNetwork={this.state.mind.download()} />
                        }
                    </div>
                }
            </div>
        );
    }
}

export default PlayNeuronalNetwork;