import React, { useState } from 'react'
import { Button, Col, Input, Row, UncontrolledTooltip } from 'reactstrap';

export default function EducationAdd(props) {

    
    const [educations, setEducations] = useState([{ schoolName: "", department: "", startDate: "", endDate: "" }])

    const handleInputChange = (e, index, ...T) => {
        const { name, value } = e.target;
        const list = [...T];
        list[index][name] = value;
        setEducations(list);
    };

    const handleRemoveClick = (index, ...T) => {
        const list = [...T];
        list.splice(index, 1);
        setEducations(list);
    };

    const handleAddClick = (...T) => {
        setEducations([...T, { ...T.values }]);
    };

    return (
        <div>
            <h6 className="text-muted" style={{ margin: '20px 0 3px 0', padding: '0' }}>EĞİTİM</h6>
            <hr style={{ margin: '1px 0 8px 0', padding: '0' }}></hr>
            {educations.map((education, i) => {
                return (
                    <div key={`${education}-${i}`}>
                        <Row>
                            <Col xs="5">
                                <Input
                                    placeholder="Okul Adı"
                                    type="text"
                                    name="schoolName"
                                    inputMode="text"
                                    bsSize="lg"
                                    value={education.schoolName || ''}
                                    onChange={e => handleInputChange(e, i, ...educations)}
                                    required
                                ></Input>
                                <Input
                                    placeholder="Bölüm Adı"
                                    style={{ marginTop: '10px' }}
                                    type="text"
                                    inputMode="text"
                                    name="department"
                                    bsSize="lg"
                                    value={education.department || ''}
                                    onChange={e => handleInputChange(e, i, ...educations)}
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
                                    value={education.startDate || ''}
                                    pattern="^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$"
                                    onChange={e => handleInputChange(e, i, ...educations)}
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
                                    value={education.endDate || ''}
                                    pattern="^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$"
                                    onChange={e => handleInputChange(e, i, ...educations)}
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
                                {educations.length !== 1 && <Button className="btn-link mr10" color="danger"
                                    onClick={() => handleRemoveClick(i, ...educations)}>Sil</Button>}

                                {educations.length - 1 === i && <Button className="btn-link" color="info" onClick={() => handleAddClick(...educations)}>
                                    <i className="now-ui-icons ui-1_simple-add mr-1"></i>
                                    Yeni Eğitim Bilgisi Ekle
                                </Button>}
                            </div>

                    </div>
                );
            })}

            {educations[0].schoolName !== "" && educations[0].department !== "" && educations[0].endDate !== "" && educations[0].jobPositionName !== "" &&
                <Button  className="btn-link" color="success" onClick={() => props.getEducation(educations)}>
                    <i className="now-ui-icons ui-1_check mr-1"></i>Eğitim Bilgilerini Onayla</Button>
            }
        </div>
    )
}
