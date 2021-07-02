import React from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardHeader, Col, Row } from 'reactstrap';
import EmployerService from 'services/employerService';

export default function EmployerUpdateApprovalsList({employerUpdateApprovals}) {

    function approve(employerUpdateApproval) {
        let employerService = new EmployerService();
        employerService.confirmUpdate(employerUpdateApproval).then(toast.success("İşveren Güncellemesi Onaylandı !")); 
    }

    return (
        <div>
            <Row>
                {employerUpdateApprovals.map(employerUpdateApproval => (
                    <Col key={employerUpdateApproval.id} md="6">
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
                                                {employerUpdateApproval.companyName}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="mtx10 ds">
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Telefon :
                                            </h5>
                                            <span> {employerUpdateApproval.phoneNumber}</span> 
                                        </div>
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                E-mail :
                                            </h5>
                                            <span> {employerUpdateApproval.email}</span> 
                                        </div>

                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Web Site :
                                            </h5>
                                            {' '}
                                            <span> {employerUpdateApproval.webSite}</span> 
                                        </div>
                                    </div>
                                    <div className="position-absolute mr5">
                                        <Button className="btn-round btn-info" color="info" onClick={() => approve(employerUpdateApproval)}>
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
