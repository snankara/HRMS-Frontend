import { useFormik } from 'formik';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { Button, Col, Container, Form, Input, Modal, ModalBody, Row } from 'reactstrap'
import EmployeeService from 'services/employeeService';

export default function EmployeeViewAndUpdate({ employee }) {
    const [modal, setModal] = useState(false);

    const {handleChange, handleSubmit } = useFormik({
        initialValues: {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordRepeat: "",

        },
        onSubmit: values => {
            values.id = employee.id
            checkValues(values)
            console.log(values);
            let employeeService = new EmployeeService();
            employeeService.update(values).then(toast.success("Bilgileriniz Güncellendi"), setModal(false))
        }
    });

    function checkValues(values) {
        if (values.firstName === "") {
            values.firstName = employee.firstName
        }

        if (values.lastName === "") {
            values.lastName = employee.lastName
        }

        if (values.email === "") {
            values.email = employee.email
        }

        if (values.password === "") {
            values.password = employee.password
        }

        if (values.passwordRepeat === "") {
            values.passwordRepeat = employee.passwordRepeat
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
                        <h4 className="title title-up">KİŞİSEL BİLGİLERİNİZ</h4>
                    </div>
                    <div style={{ margin: '0 2em 0 2em' }}><hr /></div>
                    <ModalBody>
                        <Container>
                            <Row>
                                <Col lg="6" sm="6">
                                    <Input
                                        placeholder="Ad"
                                        type="text"
                                        name="firstName"
                                        defaultValue={employee.firstName}
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <Input
                                        placeholder="Soyad"
                                        type="text"
                                        name="lastName"
                                        defaultValue={employee.lastName}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                    <Input
                                        placeholder="Şifre"
                                        type="password"
                                        name="password"
                                        defaultValue={employee.password}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>


                                </Col>
                                <Col lg="6" sm="6">

                                    <Input
                                        placeholder="E-mail"
                                        type="email"
                                        name="email"
                                        defaultValue={employee.email}
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <Input
                                        placeholder="Şifre Tekrarı"
                                        type="password"
                                        name="passwordRepeat"
                                        defaultValue={employee.passwordRepeat}
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                </Col>
                            </Row>

                        </Container>
                    </ModalBody>

                    <div className="modal-footer mt-4">
                        <Button color="info" type="submit" className="btn-round">
                            Güncelle
                        </Button>
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
