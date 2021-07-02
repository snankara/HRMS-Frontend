import React, { useState } from 'react'
import { Button, Col, Input, Row } from 'reactstrap';

export default function TechnologyUpdate(props) {

    let [technologies, setTechnologies] = useState(props.curriculumVitae.technologies)

    const handleInputChange = (e, index, ...T) => {
        const { name, value } = e.target;
        const list = [...T];
        list[index][name] = value;
        setTechnologies(list);
    };

    const handleRemoveClick = (index, ...T) => {
        const list = [...T];
        list.splice(index, 1);
        setTechnologies(list);
    };

    const handleAddClick = (...T) => {
        setTechnologies([...T, { ...T.values }]);
    };

    return (
        <div>
            <h6 className="text-muted" style={{ margin: '20px 0 3px 0', padding: '0' }}>YETKİNLİKLER</h6>
            <hr style={{ margin: '1px 0 8px 0', padding: '0' }}></hr>
            {technologies.map((technology, i) => {
                return (
                    <div key={`${technology}-${i}`}>
                        <Row>
                            <Col xs="4">
                                <Input
                                    placeholder="Yetkinlik"
                                    type="text"
                                    name="technologyName"
                                    inputMode="text"
                                    bsSize="lg"
                                    value={technology.technologyName || ''}
                                    onChange={e => handleInputChange(e, i, ...technologies)}
                                    required
                                ></Input>
                            </Col>
                            <div className="btn-box" style={{marginTop:'-8px'}}>
                                <Button className="btn-link mr10" color="danger"
                                    onClick={() => handleRemoveClick(i, ...technologies)}>Sil</Button>

                                <Button className="btn-link" color="info" onClick={() => handleAddClick(...technologies)}>
                                    <i className="now-ui-icons ui-1_simple-add mr-1"></i>
                                    Yeni Yetkinlik Ekle
                                </Button>
                            </div>
                        </Row>

                    </div>
                );
            })}

            {technologies[0].technologyName !== "" &&
                <Button className="btn-link" color="success" onClick={() => props.getTechnology(technologies)}>
                    <i className="now-ui-icons ui-1_check mr-1"></i>Yetkinlik Bilgilerini Onayla</Button>
            }
        </div>
    )
}
