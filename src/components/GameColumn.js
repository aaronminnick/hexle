import React from 'react';
import Col from 'react-bootstrap/Col';
import SixDigitGuessedRow from './SixDigitGuessedRow';
import SixDigitInputRow from './SixDigitInputRow';
import ThreePairGuessedRow from './ThreePairGuessedRow';
import ThreePairInputRow from './ThreePairInputRow';
import AnimationRow from './AnimationRow';
import Color from '../color';

let color = new Color();
let shuffledToDisplay = color.shuffledHexCharArray().toString().split(',').join('   ');

const guesses = ['DD0000', '00DD00', '01FFCC']; 

class GameColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  submitGuess = (event) => {
    event.preventDefault();
    const guess = 
      event.target[0].value +
      event.target[1].value +
      event.target[2].value +
      event.target[3].value +
      event.target[4].value +
      event.target[5].value;
    console.log(guess);
    guesses.push(guess);
  }

  render() {
    return (
      <React.Fragment>
        <Col className="col-12">
          <h1>{color.hex}</h1>
          <h1>{shuffledToDisplay}</h1>
          {guesses.map((guess, index) => 
            <SixDigitGuessedRow guess={guess}
            key={index} />
          )}
          <SixDigitInputRow submitFunc={this.submitGuess}/>
          <AnimationRow />
        </Col>
      </React.Fragment>
    );
  }
}

export default GameColumn;