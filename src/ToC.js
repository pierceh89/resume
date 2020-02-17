import React from 'react';
import {Nav} from 'react-bootstrap';

function ToC(props) {
  return (
    <Nav className={'justify-content-center'}>
      {props.columns.map(column =>
        (<Nav.Item>
          <Nav.Link href={'#'+column}>{column}</Nav.Link>
        </Nav.Item>)
      )}
    </Nav>
  );
}

export default ToC;