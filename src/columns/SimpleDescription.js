import React from 'react';
import {Row} from 'react-bootstrap';

class SimpleDescription extends React.Component {
  render() {
    const detail = this.props.detail;
    return (
      <Row>
        <h2 id={detail.title}>{detail.title}</h2>
        <div>
          {detail.description}
        </div>
      </Row>
    )
  }
}

export default SimpleDescription;