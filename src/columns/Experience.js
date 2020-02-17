import React from 'react';
import {Row} from 'react-bootstrap';

class Experience extends React.Component {
  render() {
    const detail = this.props.detail;
    return (
      <Row>
        <h2 id={detail.title}>{detail.title}</h2>
        {detail.contents.map(it => this.renderCompany(it))}
      </Row>
    );
  }

  renderCompany(content) {
    const name = content.name;
    const duration = content.duration;
    return (
      <div>
        <h3>{name}</h3>
        <div>
          {duration}
        </div>
        {content.details.map(it => this.renderDetail(it))}
      </div>
    );
  }

  renderDetail(detail) {
    const {title, workType, from, to, location, workDesc} = detail;
    return (
      <div>
        <h4>{title}</h4>
        <div>{workType}</div>
        <div>{from} - {to}</div>
        <div>{location}</div>
        <div>{workDesc}</div>
      </div>
    )
  }
}

export default Experience;