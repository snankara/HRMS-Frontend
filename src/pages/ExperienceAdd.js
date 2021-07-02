import React from 'react'
import { useState } from 'react';
import { Button, Col, Input, Row, UncontrolledTooltip } from 'reactstrap';

export default function ExperienceAdd(props) {

    const [experiences, setExperiences] = useState([{ companyName: "", jobPositionName: "", endDate: "", startDate: "" }])

    const handleInputChange = (e, index, ...T) => {
        const { name, value } = e.target;
        const list = [...T];
        list[index][name] = value;
        setExperiences(list)
    };

    const handleRemoveClick = (index, ...T) => {
        const list = [...T];
        list.splice(index, 1);
        setExperiences(list)
    };

    const handleAddClick = (...T) => {
        setExperiences([...T, { ...T.values }]);

    };
    return (
        <div>
            <h6 className="text-muted" style={{ margin: '20px 0 3px 0', padding: '0' }}>DENEYİM</h6>
            <hr style={{ margin: '1px 0 8px 0', padding: '0' }}></hr>
            {experiences.map((experience, i) => {
                return (
                    <div key={`${experience}-${i}`}>
                        <Row>
                            <Col xs="5">
                                <Input
                                    placeholder="Şirket Adı"
                                    type="text"
                                    name="companyName"
                                    inputMode="text"
                                    bsSize="lg"
                                    value={experience.companyName || ''}
                                    onChange={e => handleInputChange(e, i, ...experiences)}
                                    required
                                ></Input>
                                <Input
                                    placeholder="Çalıştığınız Pozisyon"
                                    style={{ marginTop: '10px' }}
                                    type="text"
                                    inputMode="text"
                                    name="jobPositionName"
                                    bsSize="lg"
                                    value={experience.jobPositionName || ''}
                                    onChange={e => handleInputChange(e, i, ...experiences)}
                                    required
                                ></Input>
                            </Col>

                            <Col xs="3">
                                <Input
                                    placeholder="Başlangıç Tarihi"
                                    type="text"
                                    name="startDate"
                                    id="startDate"
                                    bsSize="lg"
                                    value={experience.startDate || ''}
                                    pattern="^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$"
                                    onChange={e => handleInputChange(e, i, ...experiences)}
                                    required
                                ></Input>

                                <UncontrolledTooltip
                                    delay={0}
                                    placement="right"
                                    target="startDate"
                                >
                                    <span className="text-muted">Örn: 2010-08-25</span>
                                </UncontrolledTooltip>

                                <Input
                                    placeholder="Bitiş Tarihi"
                                    type="text"
                                    name="endDate"
                                    bsSize="lg"
                                    style={{ marginTop: '10px' }}
                                    id="endDate"
                                    value={experience.endDate || ''}
                                    pattern="^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$"
                                    onChange={e => handleInputChange(e, i, ...experiences)}
                                ></Input>
                                <UncontrolledTooltip
                                    delay={0}
                                    placement="right"
                                    target="endDate"
                                >
                                    <span className="text-muted">Örn: 2010-08-25</span>
                                </UncontrolledTooltip>
                            </Col>
                        </Row>

                        <div className="btn-box">
                            {experiences.length !== 1 && <Button className="btn-link mr10" color="danger"
                                onClick={() => handleRemoveClick(i, ...experiences)}>Sil</Button>}

                            {experiences.length - 1 === i && <Button className="btn-link" color="info" onClick={() => handleAddClick(...experiences)}>
                                <i className="now-ui-icons ui-1_simple-add mr-1"></i>
                                Yeni Deneyim Ekle
                            </Button>}
                        </div>
                    </div>
                );
            })}

            {experiences[0].companyName !== "" && experiences[0].startDate !== "" && experiences[0].endDate !== "" && experiences[0].jobPositionName !== "" &&
            <Button className="btn-link" color="success" onClick={() => props.getExperience(experiences)}>
                <i className="now-ui-icons ui-1_check mr-1"></i>Deneyim Bilgilerini Onayla</Button>
            }
        </div>
    )
}
