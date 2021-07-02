import React, { useState } from 'react'
import { Button, Col, Input, Row, UncontrolledTooltip } from 'reactstrap';

export default function LanguageUpdate(props) {

    let [languages, setLangugaes] = useState(props.curriculumVitae.languages)

    const handleInputChange = (e, index, ...T) => {
        const { name, value } = e.target;
        const list = [...T];
        list[index][name] = value;
        setLangugaes(list);
    };

    const handleRemoveClick = (index, ...T) => {
        const list = [...T];
        list.splice(index, 1);
        setLangugaes(list);
    };

    const handleAddClick = (...T) => {
        setLangugaes([...T, { ...T.values }]);
    };

    return (
        <div>
            <h6 className="text-muted" style={{ margin: '20px 0 3px 0', padding: '0' }}>YABANCI DİL</h6>
            <hr style={{ margin: '1px 0 8px 0', padding: '0' }}></hr>
            {languages.map((language, i) => {
                return (
                    <div key={`${language}-${i}`}>
                        <Row>
                            <Col xs="3">
                                <Input
                                    placeholder="Dil"
                                    type="text"
                                    name="languageName"
                                    inputMode="text"
                                    bsSize="lg"
                                    value={language.languageName || ''}
                                    onChange={e => handleInputChange(e, i, ...languages)}
                                    required
                                ></Input>
                            </Col>

                            <Col xs="3">
                                <Input
                                    placeholder="Seviye"
                                    type="number"
                                    inputMode="number"
                                    name="level"
                                    id="level"
                                    bsSize="lg"
                                    min={1}
                                    max={5}
                                    value={language.level || ''}
                                    onChange={e => handleInputChange(e, i, ...languages)}
                                    required
                                ></Input>

                                <UncontrolledTooltip
                                    delay={0}
                                    placement="right"
                                    target="level"
                                >
                                    <span className="text-muted">1 ile 5 Arasında Bir Sayı Girmelisiniz</span>
                                </UncontrolledTooltip>
                            </Col>
                        </Row>
                        <div className="btn-box">
                            <Button className="btn-link mr10" color="danger"
                                onClick={() => handleRemoveClick(i, ...languages)}>Sil</Button>

                            <Button className="btn-link" color="info" onClick={() => handleAddClick(...languages)}>
                                <i className="now-ui-icons ui-1_simple-add mr-1"></i>
                                Yeni Dil Ekle
                            </Button>
                        </div>

                    </div>
                );
            })}

            {languages[0].languageName !== "" && languages[0].level !== "" &&
                <Button className="btn-link" color="success" onClick={() => props.getLanguage(languages)}>
                    <i className="now-ui-icons ui-1_check mr-1"></i>Dil Bilgilerini Onayla</Button>
            }
        </div>
    )
}
