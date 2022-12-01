const R = require('ramda');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

function countWords(sentence) {
    return sentence.replace(/[^0-9]/g, '').length;
  }

console.log(countWords(sentence));
