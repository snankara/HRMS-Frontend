import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Card, CardHeader, Col, Row } from 'reactstrap';
import CurriculumVitaeService from 'services/curriculumVitaeService';
import CurriculumVitaeViewAndUpdate from './CurriculumVitaeViewAndUpdate';

export default function CurriculumVitaeList() {

    const [curriculumVitaes, setCurriculumVitaes] = useState([])

    useEffect(() => {
        let curriculumVitaeService = new CurriculumVitaeService();
        curriculumVitaeService.getByCandidateIdCurriculumVitae(60).then(result => setCurriculumVitaes(result.data.data))
    }, [])

    function deleteCurriculumVitae(curriculumVitaeId) {
        let curriculumVitaeService = new CurriculumVitaeService();
        curriculumVitaeService.deleteById(curriculumVitaeId).then(result => toast.success(result.data.message))
    }
    return (
        <div>
            <Row>
                {curriculumVitaes.map(curriculumVitae => (
                    <Col key={curriculumVitae.id} md="6">
                        <Card className="ds" style={{ borderRadius: '25px' }}>
                            <CardHeader>
                                <div className="team-player">
                                    <div className="mtx10">
                                        <div className="ds">
                                            <h5 className="modal-title">
                                                {moment(curriculumVitae.createdDate).format('ll')} <span>tarihinde oluşturdunuz.</span><br />
                                                {!curriculumVitae.updatedDate && <span>Ancak güncelleme yapmadınız.</span>}
                                            </h5>
                                            <p className="category text-info"></p>
                                        </div>
                                    </div>
                                    <div className="mtx10 ds">
                                        <h6 className="ml-xl-3">
                                        </h6>
                                    </div>
                                    <div className="ds fl-r position-absolute mr5">
                                        <CurriculumVitaeViewAndUpdate cvId={curriculumVitae.id} />
                                    </div>
                                </div>
                            </CardHeader>
                            <Button className="btn btn-link ml-3 mb-3" color="danger" onClick={() => deleteCurriculumVitae(curriculumVitae.id)}>Sil</Button>

                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
