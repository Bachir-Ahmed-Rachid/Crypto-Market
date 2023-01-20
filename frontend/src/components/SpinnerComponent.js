import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import {Row,Col} from 'react-bootstrap'
const SpinnerComponent = () => {
  return (
    <Row>
      <Col md={{ span: 6, offset: 6 }}>
        <Spinner animation="border" role="status">
        </Spinner>
      </Col>

    </Row>

  )
}

export default SpinnerComponent