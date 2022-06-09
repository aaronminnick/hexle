import React from 'react';
import Row from 'react-bootstrap/Row';

function SixDigitInputRow(props) {
  return (
    <React.Fragment>
      <Row>
        <form onSubmit={props.submitFunc}>
          <input id="redinput1" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <input id="redinput2" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <input id="greeninput1" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <input id="greeninput2" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <input id="blueinput1" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <input id="blueinput2" type="text" pattern="^[0-9a-fA-F]$" maxlength="1" style={{width: 30}} title="can only use valid hex characters (0-9, a-f)" />
          <button type="submit">GUESS!</button>
        </form>
      </Row>
    </React.Fragment>
  )
}

export default SixDigitInputRow;