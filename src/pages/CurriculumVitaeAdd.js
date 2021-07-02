import { useFormik } from 'formik';
import React, { useState } from 'react'
import {
    Button,
    Col,
    Form,
    Input,
    Label,
    Modal,
    ModalBody,
    NavLink,
    Row,
    UncontrolledTooltip
} from 'reactstrap'

import { Container } from 'react-bootstrap';
import ExperienceAdd from './ExperienceAdd';
import EducationAdd from './EducationAdd';
import LanguageAdd from './LanguageAdd';
import TechnologyAdd from './TechnologyAdd';
import { toast } from 'react-toastify';
import CurriculumVitaeService from 'services/curriculumVitaeService';

export default function CurriculumVitaeAdd() {

    const [modal, setModal] = useState(false);
    let [selectedFile, setSelectedFile] = useState({ file: null, imagePreviewUrl: "" })
    var currentCandidate = { id: 60 };

    const handleExperiences = (experiences) => {
        values.experiences = [...experiences]
        toast.success("Deneyim Bilgileriniz Onaylandı")
    }

    const handleEducations = (educations) => {
        values.educations = [...educations]
        toast.success("Eğitim Bilgileriniz Onaylandı")
    }

    const handleLanguages = (languages) => {
        values.languages = [...languages]
        toast.success("Dil Bilgileriniz Onaylandı")
    }

    const handleTechnologies = (technologies) => {
        values.technologies = [...technologies]
        toast.success("Yetkinlik Bilgileriniz Onaylandı")
    }

    let onFileChange = event => {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            setSelectedFile({
                file: file,
                imagePreviewUrl: reader.result
            })
        }
        reader.readAsDataURL(file)
    }

    function uploadFile() {
        let formData = new FormData()
        formData.append("file", selectedFile.file)
        let curriculumVitaeService = new CurriculumVitaeService();
        curriculumVitaeService.getByCandidateIdLastItem(60).then(result => curriculumVitaeService.addImage(result.data.data[0].id, formData).then(toast.success("Image File Added!")))
    }

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            candidate: "",
            coverLetter: "",
            githubLink: "",
            linkedinLink: "",
            candidateImages: [{ imageUrl: "" }],
            educations: [{ schoolName: "", department: "", startDate: "", endDate: "" }],
            experiences: [{ companyName: "", jobPositionName: "", startDate: "", endDate: "" }],
            languages: [{ languageName: "", level: "" }],
            technologies: [{ technologyName: "" }]
        },

        onSubmit: values => {
            let curriculumVitaeService = new CurriculumVitaeService();
            values.candidate = currentCandidate;
            curriculumVitaeService.add(values).then(toast.success("CV Oluşturuldu."), setModal(false));
            setTimeout(uploadFile, 5000)
        }
    });

    return (
        <div>
            <NavLink
                color="primary"
                className="mr-1"
                onClick={() => setModal(true)}
                href="#"
            >
                CV Ekle
            </NavLink>

            <Modal isOpen={modal} toggle={() => setModal(false)} centered backdrop="static" size="lg">
                <Form onSubmit={handleSubmit}>
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            type="button"
                            onClick={() => setModal(false)}
                        >
                            <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                        <h4 className="title title-up">CV BİLGİLERİ</h4>
                    </div>
                    <div style={{ margin: '0 2em 0 2em' }}><hr /></div>
                    <ModalBody>
                        <Container>

                            <Col>
                                <Label style={{ cursor: 'pointer' }} htmlFor="imageInput" className="btn-sm btn-link btn-info" color="info">
                                    <Input
                                        type="file"
                                        name="imageUrl"
                                        id="imageInput"
                                        onChange={onFileChange}
                                        required
                                        hidden
                                    >
                                    </Input>
                                    <div className="photo-container" style={{ width: '200px', height: '200px' }}>
                                        <img alt="" src={!selectedFile.imagePreviewUrl ? require("../assets/img/default_profile.png").default : selectedFile.imagePreviewUrl} width="100%" height="100%" style={{ objectFit: 'cover' }}></img>
                                    </div>
                                </Label>
                            </Col>

                            <Row style={{ marginTop: '20px' }}>
                                <Col xs="4">
                                    <Input
                                        placeholder="GitHub Link"
                                        type="url"
                                        name="githubLink"
                                        id="githubLink"
                                        bsSize='lg'
                                        pattern="https://.*"
                                        value={values.githubLink}
                                        onChange={handleChange}
                                        required
                                    ></Input>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="githubLink"
                                    >
                                        <span className="text-muted">Örn: https://example.com</span>
                                    </UncontrolledTooltip>
                                </Col>
                                <Col xs="4">
                                    <Input
                                        placeholder="LinkedIn Link"
                                        type="url"
                                        name="linkedinLink"
                                        id="linkedinLink"
                                        bsSize='lg'
                                        pattern="https://.*"
                                        value={values.linkedinLink}
                                        onChange={handleChange}
                                        required
                                    ></Input>
                                    <UncontrolledTooltip
                                        delay={0}
                                        placement="top"
                                        target="linkedinLink"
                                    >
                                        <span className="text-muted">Örn: https://example.com</span>
                                    </UncontrolledTooltip>

                                </Col>
                            </Row>

                            <EducationAdd getEducation={handleEducations} />
                            <ExperienceAdd getExperience={handleExperiences} />
                            <LanguageAdd getLanguage={handleLanguages} />
                            <TechnologyAdd getTechnology={handleTechnologies} />

                            <Input
                                style={{ height: '200px', margin: '19px 15px 0 20px' }}
                                placeholder="Ön Yazı"
                                type="textarea"
                                name="coverLetter"
                                id="coverLetter"
                                value={values.coverLetter}
                                onChange={handleChange}
                                required
                            ></Input>
                        </Container>
                    </ModalBody>

                    <div className="modal-footer">
                        <Button color="info" type="submit" className="btn-round">
                            Oluştur
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
