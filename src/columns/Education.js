import React from 'react';
import {Row} from "react-bootstrap";

class Education extends React.Component {
  render() {
    const detail = this.props.detail;
    return (
      <Row>
        <h2 id={detail.title}>{detail.title}</h2>
        {detail.contents.map(it => this.renderEdu(it))}
      </Row>
    );
  }

  renderEdu(content) {
    const {name, degree, major, gpa, from, to, desc} = content;
    return (
      <div>
        <h4>{name}</h4>
        <div>{degree}</div>
        <div>{major}</div>
        <div>{gpa}</div>
        <div>{from} - {to}</div>
        <div>{desc}</div>
      </div>
    );
  }
}

export default Education;
