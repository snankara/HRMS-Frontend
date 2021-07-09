import JobAdvertisementList from 'pages/JobAdvertisementList';
import React from 'react'
import { Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import { Container } from "reactstrap";

export default function Dashboard() {

  return (
    <div className="section section-tabs" id="dashboard-section">
      <Container>
        <ToastContainer transition={Zoom} position="bottom-right" />
        <JobAdvertisementList/>
      </Container>
    </div>
  )
}
