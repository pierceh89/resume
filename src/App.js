import React from 'react';
import {Container, Row} from 'react-bootstrap';
import ToC from './ToC';
import './App.css';
import './css/solarized.css';
import './css/solarized-light.css';
import resumeDetails from "./resume";
import {Experience, Education, SimpleDescription} from './columns';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "darkMode": false
    }
  }

  render() {
    const tocList = Object.keys(resumeDetails)
      .filter(it => resumeDetails[it].title !== undefined)
      .filter(it => resumeDetails[it].bookmark)
      .map(it => resumeDetails[it].title);

    const visibleColumns = Object.keys(resumeDetails)
      .filter(it => resumeDetails[it].visible !== undefined)
      .filter(it => resumeDetails[it].visible);

    return (
      <Container>
        <ToC columns={tocList}/>
        {visibleColumns.map(it => this.renderColumn(it))}
      </Container>
    );
  }

  renderColumn(columnName) {
    const detail = resumeDetails[columnName];
    if (columnName === 'experience') {
      return <Experience detail={resumeDetails[columnName]}/>;
    } else if (columnName === 'education') {
      return <Education detail={resumeDetails[columnName]}/>;
    } else if (columnName === 'simpleDesc') {
      return <SimpleDescription detail={resumeDetails[columnName]}/>;
    } else {
      return (
        <Row>
          <h2 id={detail.title}>
            {detail.title}
          </h2>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
          dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
          laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
          voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
          pariatur?"
        </Row>
      );
    }
  }
}

export default App;
