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
          <SixDigitInputRow />
          <AnimationRow />
        </Col>
      </React.Fragment>
    );
  }
}

export default GameColumn;