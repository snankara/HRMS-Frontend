import JobAdvertisementList from 'pages/JobAdvertisementList';
import React from 'react'
import { Container } from "reactstrap";

export default function Dashboard() {

  return (
    <div className="section section-tabs" id="dashboard-section">
      <Container>
          <JobAdvertisementList />
      </Container>
    </div>
  )
}
