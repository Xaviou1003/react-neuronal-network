import React from 'react';
import JSONTree from 'react-json-tree';

const ShowWeightNeuralNetwork = (props) => (
    <div style={{ textAlign: 'left', height: '100px', border: '1px solid', width: '600px', margin: 'auto', overflow: 'auto' }}>
        <JSONTree data={props.pluginNeuronalNetwork} />
    </div>
);

export default ShowWeightNeuralNetwork;