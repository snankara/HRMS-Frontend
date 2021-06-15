import moment from 'moment';
import React, { useState, useEffect } from 'react'
import {
    Button,
    Col,
    Card,
    CardHeader,
} from "reactstrap";
import JobAdvertisementService from 'services/jobAdvertisementService'; 

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(true).then(result => setJobAdvertisements(result.data.data))
    },[])
    return (
        <>
            {jobAdvertisements.map(jobAdvertisement => (
                <Col md="6" key={jobAdvertisement.id}>
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
                                    <div className="fl-r mt10">
                                        <Button className="btn-icon btn-round" outline color="info" type="button">
                                            <i className="now-ui-icons ui-1_send"></i>
                                        </Button>
                                    </div>
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
                                    <Button className="btn-round btn-info" color="info" type="button">
                                        <i className="now-ui-icons ui-1_zoom-bold mr5"></i>
                                        <span>İncele</span>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>
                </Col>
            ))}
        </>
    )
}
