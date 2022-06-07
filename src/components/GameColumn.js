import React from 'react';
import Col from 'react-bootstrap/Col';
import AnimationRow from './AnimationRow';

function GameColumn() {
  return (
    <React.Fragment>
      <Col className="col-12">

        <AnimationRow />
      </Col>
    </React.Fragment>
  );
}

export default GameColumn;