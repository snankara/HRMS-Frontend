import React, { useState, useEffect } from 'react'
import {
    Card,
    CardHeader,
    NavItem,
    NavLink,
    Nav,
    Col
} from "reactstrap";
import JobPositionService from 'services/jobPositionService';

export default function JobPositions() {
    
    const [jobPositions, setJobPositions] = useState([]);
    const [iconPills, setIconPills] = useState([]);

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    })

    return (
        <Col xl="3">
            <p className="category">Pozisyonlar</p>
            <Card>
                <CardHeader>
                    <Nav className="justify-content-center" role="tablist" tabs>
                        <NavItem>
                            <NavLink
                                className={iconPills === "0" ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIconPills("0");
                                }}
                            >
                                Tüm Pozisyonlar
                            </NavLink>
                            <hr></hr>
                        </NavItem>
                        {jobPositions.map(position => (
                        <NavItem className="mtx10" key={position.id}>
                            <NavLink
                                className={iconPills === position.positionName ? "active" : ""}
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIconPills(position.positionName);
                                }}
                            >
                                {position.positionName}
                            </NavLink>
                        </NavItem>
                        ))}
                    </Nav>
                </CardHeader>
            </Card>
        </Col>
    )
}
