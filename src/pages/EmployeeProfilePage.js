import React, { useState, useEffect } from "react";
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    Card,
    CardHeader,
    Form,
} from "reactstrap";

import EmployeeProfileHeader from "components/Headers/EmployeeProfileHeader.js";
import ProfileFooter from "components/Footers/ProfileFooter.js";
import EmployeeProfileNav from "components/Navbars/EmployeeProfileNav.js";
import JobAdvertisementService from "services/jobAdvertisementService";
import moment from "moment";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify'

function EmployeeProfilePage() {
    const [pills, setPills] = useState("1");
    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [jobAdvertisement, setJobAdvertisement] = useState({})

    const { value, errors, handleChange, handleSubmit, touched } = useFormik({ 
        initialValues: {
            jobAdvertisement: ""
        },

        onSubmit: value => {
            let jobAdvertisementService = new JobAdvertisementService();
            value.jobAdvertisement = jobAdvertisement;
            jobAdvertisementService.activateJobAdvertisement(value.jobAdvertisement).then(toast.success("Onaylandı !"));
        }
    });

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
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(false).then(result => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <>
            <ToastContainer position="bottom-right"/>
            <EmployeeProfileNav />
            <div className="wrapper">
                <EmployeeProfileHeader />
                <div className="section">
                    <Container>
                        <div className="button-container">
                            <Button className="btn-round" color="info" size="lg">
                                Follow
                            </Button>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip515203352"
                                size="lg"
                            >
                                <i className="fab fa-twitter"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip515203352">
                                Follow me on Twitter
                            </UncontrolledTooltip>
                            <Button
                                className="btn-round btn-icon"
                                color="default"
                                id="tooltip340339231"
                                size="lg"
                            >
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <UncontrolledTooltip delay={0} target="tooltip340339231">
                                Follow me on Instagram
                            </UncontrolledTooltip>
                        </div>
                        <h3 className="title">About me</h3>
                        <h5 className="description">
                            An artist of considerable range, Ryan — the name taken by
                            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                            and records all of his own music, giving it a warm, intimate feel
                            with a solid groove structure. An artist of considerable range.
                        </h5>

                        <Row>
                            <Col className="ml-auto mr-auto" md="6">
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
                            <TabContent className="gallery" activeTab={"pills" + pills}>
                                <TabPane tabId="pills1">
                                    <Row>

                                            {jobAdvertisements.map(jobAdvertisement => (
                                                <Col md="12" key={jobAdvertisement.id} className="collections" className="ml-auto mr-auto">
                                                    <Card className="ds">
                                                        <CardHeader>

                                                            <div className="team-player">
                                                                <div className="mtx10">
                                                                    <div className="ds">
                                                                        <img
                                                                            alt="..."
                                                                            width="80px" height="auto"
                                                                            src={require("assets/img/file.png").default}
                                                                        ></img>
                                                                    </div>
                                                                    <div className="ds">
                                                                        <h4 className="modal-title">
                                                                            {jobAdvertisement.employer.companyName}
                                                                        </h4>
                                                                        <p className="category text-info">{jobAdvertisement.jobPosition.positionName}</p>
                                                                    </div>
                                                                    {/* <div className="fl-r mt10">
                                                                        <Button className="btn-icon btn-round" outline color="info" type="button">
                                                                            <i className="now-ui-icons ui-1_send"></i>
                                                                        </Button>
                                                                    </div> */}
                                                                </div>
                                                                <div className="mtx10 ds">
                                                                    <div>
                                                                        <h5 className="ml-xl-3 ds">
                                                                            Maaş :
                                                                        </h5>
                                                                        <span> {jobAdvertisement.minSalary} - {jobAdvertisement.maxSalary}₺</span>
                                                                    </div>
                                                                    <div>
                                                                        <h5 className="ml-xl-3 ds">
                                                                            Başvuru :
                                                                        </h5>
                                                                        <span className="ds"> {moment(jobAdvertisement.startDate).format("ll")} |
                                                                            {moment(jobAdvertisement.endDate).format(" ll")}</span>
                                                                    </div>
                                                                    <h6 className="ml-xl-3">
                                                                        {jobAdvertisement.city.cityName}
                                                                    </h6>
                                                                </div>
                                                                <div className="ds fl-r position-absolute mr5">
                                                                    <Form onSubmit={handleSubmit}>       
                                                                    <Button className="btn-round btn-info" color="info" type="submit" name="jobAdvertisementId" onClick={() => setJobAdvertisement(jobAdvertisement)}>
                                                                        <i className="now-ui-icons ui-1_check mr5"></i>
                                                                        <span>Onayla</span>
                                                                    </Button>
                                                                    </Form>

                                                                </div>
                                                            </div>
                                                        </CardHeader>
                                                    </Card>
                                                </Col>
                                            ))}
                                    </Row>
                                </TabPane>
                                <TabPane tabId="pills2">
                                    <Col className="ml-auto mr-auto" md="10">
                                        <Row className="collections">
                                            <Col md="6">
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg6.jpg").default}
                                                ></img>
                                                <img
                                                    alt="..."
                                                    className="img-raised"
                                                    src={require("assets/img/bg11.jpg").default}
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
                                                    src={require("assets/img/bg8.jpg").default}
                                                ></img>
                                            </Col>
                                        </Row>
                                    </Col>
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
                        </Row>
                    </Container>
                </div>
                <ProfileFooter />
            </div>
        </>
    );
}

export default EmployeeProfilePage;
