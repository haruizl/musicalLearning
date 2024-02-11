import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'reactstrap';
import DocumentTypesList from './DocumentTypesList';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [documentTypes, setDocumentTypes] = useState([]);
  const cargarTareas = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then((response)=>{console.log(response.data.results)
      setDocumentTypes(response.data.results)});
  }
  useEffect(cargarTareas, [])
  return (
    <>
      <Container>
        <Row>
          <Col>
            <DocumentTypesList documentTypes={documentTypes}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
