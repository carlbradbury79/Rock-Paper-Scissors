const brain = require('brain.js');

const network = new brain.NeuralNetwork();

network.train([
    { input:[1,0,0,1,0,0], output:[1,1] },
    { input:[0,1,0,0,1,0], output:[1,1] },
    { input:[0,0,1,0,0,1], output:[1,1] },
    { input:[1,0,0,0,1,0], output:[0,1] },
    { input:[1,0,0,0,0,1], output:[1,0] },
    { input:[0,1,0,1,0,0], output:[1,0] },
    { input:[0,1,0,0,0,1], output:[0,1] },
    { input:[0,0,1,1,0,0], output:[0,1] },
    { input:[0,0,1,0,1,0], output:[1,0] }
]);

const output = network.run([0,1,0,1,0,0])

console.log(`prob: ${Math.round(output[0])} - ${Math.round(output[1])}`);