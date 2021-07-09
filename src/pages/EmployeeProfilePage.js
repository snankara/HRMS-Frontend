import React, { useState, useEffect } from "react";
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
} from "reactstrap";

import EmployeeProfileHeader from "components/Headers/EmployeeProfileHeader.js";
import ProfileFooter from "components/Footers/ProfileFooter.js";
import EmployeeProfileNav from "components/Navbars/EmployeeProfileNav.js";
import { ToastContainer, Zoom } from 'react-toastify'
import JobAdvertisementListForApproval from "./JobAdvertisementListForApproval";
import EmployeeService from "services/employeeService";
import JobAdvertisementService from "services/jobAdvertisementService";
import EmployerService from "services/employerService";
import EmployerUpdateApprovalsList from "./EmployerUpdateApprovalsList";
import EmployeeViewAndUpdate from "./EmployeeViewAndUpdate";

function EmployeeProfilePage() {

    const [pills, setPills] = useState("1");
    const [employee, setEmployee] = useState({})
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [employerUpdateApprovals, setEmployerUpdateApprovals] = useState([])
    const [employerApprovals, setEmployerApprovals] = useState([])

    useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    }, []);

    useEffect(() => {
        let employeeService = new EmployeeService();
        employeeService.findById(62).then(result => setEmployee(result.data.data))

        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(false).then(result => setJobAdvertisements(result.data.data))

        let employerService = new EmployerService();
        employerService.findByUpdateConfirmation(false).then(result => setEmployerUpdateApprovals(result.data.data))
        employerService.findByVerifiedByEmployee(false).then(result => setEmployerApprovals(result.data.data))        

    }, []);


    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(false).then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <>
            <ToastContainer transition={Zoom} position="bottom-right" />
            {/* <EmployeeProfileNav employee={employee}/>  */}
            <div className="wrapper">
                <EmployeeProfileHeader 
                employee={employee} 
                jobAdvertisements={jobAdvertisements}
                employerUpdateApprovals={employerUpdateApprovals}
                employerApprovals={employerApprovals}
                />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <EmployeeViewAndUpdate employee={employee}/>
                        </div>
                        <h3 className="title">About me</h3>
                        <h5 className="description">
                            An artist of considerable range, Ryan — the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                            and records all of his own music, giving it a warm, intimate feel
                            with a solid groove structure. An artist of considerable range.
                        </h5>

                        <Row>
                            <Col className="ml-auto mr-auto" md="12">
                                <h4 className="title text-center">My Portfolio</h4>
                                <div className="nav-align-center">
                                    <Nav
                                        className="nav-pills-info nav-pills-just-icons"
                                        pills
                                        role="tablist"
                                    >
                                        <NavItem>
                                            <NavLink
                                                className={pills === "1" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("1");
                                                }}
                                            >
                                                <i className="now-ui-icons design_image"></i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "2" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("2");
                                                }}
                                            >
                                                <i className="now-ui-icons location_world"></i>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={pills === "3" ? "active" : ""}
                                                href="#pablo"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setPills("3");
                                                }}
                                            >
                                                <i className="now-ui-icons sport_user-run"></i>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Col>
                            <Col style={{marginTop:'50px'}}> 
                            <TabContent activeTab={"pills" + pills}>
                                <TabPane tabId="pills1">
                                    <JobAdvertisementListForApproval jobAdvertisements={jobAdvertisements}/> 
                                </TabPane>
                                <TabPane tabId="pills2">
                                    <EmployerUpdateApprovalsList  employerUpdateApprovals={employerUpdateApprovals}/>
                                </TabPane>
                                <TabPane tabId="pills3">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg3.jpg").default}
                                                ></img>
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg8.jpg").default}
                                                ></img>
                                            </Col>
                                            <Col md="6">
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg7.jpg").default}
                                                ></img>
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg6.jpg").default}
                                                ></img>
                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                            </TabContent>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <ProfileFooter /> */}
            </div>
        </>
    );
}

export default EmployeeProfilePage;
