import React from 'react';
import Row from 'react-bootstrap/Row';

function SixDigitGuessedRow(props) {
  return (
    <React.Fragment>
      <Row>
        <h2 style={{color: `#${props.guess}`}}>{props.guess}</h2>
      </Row>
    </React.Fragment>
  )
}

export default SixDigitGuessedRow;