import JobAdvertisementList from 'pages/JobAdvertisementList';
import React from 'react'
import { Container,Row } from "reactstrap";

export default function Dashboard() {
  
    return (
        <div className="section section-tabs" id="dashboard-section"> 
        <Container>
          <h1 className="text-center text-muted">
            İş İlanları <br></br>
            <hr></hr>
            <small></small>
          </h1>
          <Row>
            <JobAdvertisementList/>
          </Row>

        </Container>
      </div>
    )
}
