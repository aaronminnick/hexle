import React from 'react';
import Row from 'react-bootstrap/Row';

function SixDigitInputRow(props) {
  return (
    <React.Fragment>
      <Row>
        <form onSubmit={props.submitFunc}>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <input type="text" pattern="^[0-9a-fA-F]$" maxLength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" required/>
          <button type="submit">GUESS!</button>
        </form>
      </Row>
    </React.Fragment>
  )
}

export default SixDigitInputRow;