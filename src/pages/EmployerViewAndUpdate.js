import { useFormik } from 'formik';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Container, Form, Input, Modal, ModalBody, Row } from 'reactstrap'
import EmployerService from 'services/employerService';

export default function EmployerViewAndUpdate({ employer }) {
    const [modal, setModal] = useState(false);

    const {handleChange, handleSubmit } = useFormik({
        initialValues: {
            id: "",
            companyName: "",
            email: "",
            webSite: "",
            phoneNumber: "",
            password: "",
            passwordRepeat: "",
            verifiedByEmployee: "",
            verifiedByEmmail: "",
            updateConfirmation: ""

        },

        onSubmit: values => {
            values.id = employer.id
            checkValues(values)
            console.log(values);
            let employerService = new EmployerService();
            employerService.update(values).then(toast.success("Bilgileriniz Onaylanmak Üzere Gönderildi"), setModal(false))
        }
    });

    function checkValues(values) {
        if (values.companyName === "") {
            values.companyName = employer.companyName
        }

        if (values.email === "") {
            values.email = employer.email
        }

        if (values.phoneNumber === "") {
            values.phoneNumber = employer.phoneNumber
        }

        if (values.webSite === "") {
            values.webSite = employer.webSite
        }

        if (values.password === "") {
            values.password = employer.password
        }

        if (values.passwordRepeat === "") {
            values.passwordRepeat = employer.passwordRepeat
        }
    }
    return (
        <div>
            <Button className="btn-round" color="info" size="lg" onClick={() => setModal(true)}>
                Bilgilerinizi Görüntüleyin
            </Button>
            <Modal isOpen={modal} toggle={() => setModal(false)} centered backdrop="static">
                <Form onSubmit={handleSubmit}>
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            type="button"
                            onClick={() => setModal(false)}
                        >
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                        <h4 className="title title-up">ŞİRKET BİLGİLERİNİZ</h4>
                    </div>
                    <div style={{ margin: '0 2em 0 2em' }}><hr /></div>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col lg="6" sm="6">

                                    <Input
                                        placeholder="Şirket Adı"
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        defaultValue={employer.companyName}
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <Input
                                        placeholder="E-mail Adresi"
                                        type="text"
                                        name="email"
                                        defaultValue={employer.email}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                    <Input
                                        placeholder="Şifre"
                                        type="password"
                                        name="password"
                                        defaultValue={employer.password}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>


                                </Col>
                                <Col lg="6" sm="6">

                                    <Input
                                        placeholder="Web Site"
                                        type="url"
                                        name="webSite"
                                        defaultValue={employer.webSite}
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <Input
                                        placeholder="Telefon"
                                        type="tel"
                                        name="phoneNumber"
                                        defaultValue={employer.phoneNumber}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                    <Input
                                        placeholder="Şifre Tekrarı"
                                        type="password"
                                        name="passwordRepeat"
                                        defaultValue={employer.passwordRepeat}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                </Col>
                            </Row>
                        </Container>
                        {!employer.updateConfirmation &&
                            <div style={{textAlign:'center'}}>
                                <Button
                                    className="btn-link"
                                    color="danger"
                                    onClick={() => setModal(false)}
                                >
                                    Dikkat! Son güncellemeniz onayda bekliyor. Bu süreçte yeniden güncelleme işlemi yapamazsınız.
                                </Button>
                            </div>
                        }
                    </ModalBody>
                    <div className="modal-footer mt-4">
                        {employer.updateConfirmation &&
                            <Button color="info" type="submit" className="btn-round">
                                Güncelle
                            </Button>
                        }
                        <Button
                            color="default"
                            type="button"
                            className="btn-round"
                            onClick={() => setModal(false)}
                        >
                            Vazgeç
                        </Button>
                    </div>
                </Form>
            </Modal>
        </div>
    )
}
