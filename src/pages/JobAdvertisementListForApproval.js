import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardHeader, Col, Row } from 'reactstrap';
import JobAdvertisementService from 'services/jobAdvertisementService';

export default function JobAdvertisementListForApproval() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(false).then(result => setJobAdvertisements(result.data.data))
    }, [])

    function onSubmit(jobAdvertisement) {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.activateJobAdvertisement(jobAdvertisement).then(toast.success("Onaylandı !"));
    }

    return (
        <div>
            <Row>
                {jobAdvertisements.map(jobAdvertisement => (
                    <Col key={jobAdvertisement.id} md="6">
                        <Card className="ds" style={{ borderRadius: '25px' }}>
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
                                            {' '}
                                            <span className="ds"> {!jobAdvertisement.startDate && 'Onayda Bekliyor'} {jobAdvertisement.startDate} |
                                                {moment(jobAdvertisement.endDate).format(" ll")}</span>
                                        </div>
                                        <h6 className="ml-xl-3">
                                            {jobAdvertisement.city.cityName}
                                        </h6>
                                    </div>
                                    <div className="ds fl-r position-absolute mr5">
                                        <Button className="btn-round btn-info" color="info" onClick={() => onSubmit(jobAdvertisement)}>
                                            <i className="now-ui-icons ui-1_check mr5"></i>
                                            <span>Onayla</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
