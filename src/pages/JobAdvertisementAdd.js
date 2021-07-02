import { useFormik } from 'formik';
import React, { useState, useEffect } from 'react'
import {
    Button,
    Col,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Input,
    Modal,
    ModalBody,
    NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap'

import Datetime from "react-datetime";

import CityService from 'services/citySerivce';
import JobPositionService from 'services/jobPositionService';
import TypeOfWorkingService from 'services/typeOfWorkingService';
import WorkingTimeService from 'services/workingTimeService';
import JobAdvertisementService from 'services/jobAdvertisementService'; 

import moment from 'moment';
import 'moment/locale/tr';
import { toast } from 'react-toastify';

export default function JobAdvertisementAdd() {

    const [modal, setModal] = useState(false);

    const [cities, setCities] = useState([])
    const [jobPositions, setJobPositions] = useState([])
    const [typesOfWorking, setTypesOfWorking] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])

    const [selectedCity, setSelectedCity] = useState({})
    const [selectedDate, setSelectedDate] = useState(moment().format('ll'))
    const [selectedJobPosition, setSelectedJobPosition] = useState({})
    const [selectedTypeOfWorking, setSelectedTypeOfWorking] = useState({})
    const [selectedWorkingTime, setSelectedWorkingTime] = useState({})

    var currentEmployer = { id: 50 };

    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };


    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data))

        let jobPositionService = new JobPositionService();
        jobPositionService.getAll().then(result => setJobPositions(result.data.data))

        let typesOfWorkingService = new TypeOfWorkingService();
        typesOfWorkingService.getAll().then(result => setTypesOfWorking(result.data.data))

        let wokingTimeService = new WorkingTimeService();
        wokingTimeService.getAll().then(result => setWorkingTimes(result.data.data))
    }, [])

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            employer: "",
            city: "",
            jobPosition: "",
            typeOfWorking: "",
            workingTime: "",
            endDate: "",
            jobDescription: "",
            numberOfPosition: "",
            minSalary: "",
            maxSalary: "",
        },

        onSubmit: values => {
            let jobAdvertisementService = new JobAdvertisementService();
            values.city = selectedCity
            values.endDate = moment(selectedDate).format('YYYY-MM-DD') 
            values.jobPosition = selectedJobPosition
            values.typeOfWorking = selectedTypeOfWorking
            values.workingTime = selectedWorkingTime
            values.employer = currentEmployer;
            jobAdvertisementService.add(values).then(toast.success("İlanınız Onaylanmak Üzere Sistem Personeline İletilmiştir."),setModal(false));
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
                İş İlanı Oluştur
            </NavLink>

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
                            <h4 className="title title-up">İLAN BİLGİLERİ</h4>
                        </div>
                        <div style={{ margin: '0 2em 0 2em' }}><hr /></div>
                        <ModalBody>
                            <Row>
                                <Col lg="6" sm="6">

                                    <Input
                                        placeholder="Minimum Maaş"
                                        type="text"
                                        name="minSalary"
                                        value={values.minSalary}
                                        min="1"
                                        pattern="^-?[0-9]\d*\.?\d*$"
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <Input
                                        placeholder="Açık Pozisyon"
                                        type="text"
                                        name="numberOfPosition"
                                        value={values.numberOfPosition}
                                        min="1"
                                        pattern="^-?[0-9]\d*\.?\d*$"
                                        onChange={handleChange}
                                        required
                                        style={{ margin: '20px 0 8px 0' }}
                                    ></Input>

                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            style={{ margin: '12px 0 0 -15px' }}
                                            caret
                                            color="neutral"
                                            href="#pablo"
                                            className="dropdown-text-color"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <span className="dropdown-text-color"> {selectedJobPosition.positionName || 'Pozisyon Seçiniz'} </span>
                                        </DropdownToggle>
                                        <DropdownMenu center="true">
                                            <DropdownItem header>
                                                Pozisyonlar
                                            </DropdownItem>
                                            {jobPositions.map(position => (
                                                <DropdownItem
                                                    key={position.id}
                                                    href="#"
                                                    onClick={() => setSelectedJobPosition(position)}
                                                >
                                                    {position.positionName}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            style={{ margin: '12px 0 0 -15px' }}
                                            caret
                                            color="neutral"
                                            href="#pablo"
                                            className="dropdown-text-color"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <span className="dropdown-text-color"> {selectedTypeOfWorking.typeName || 'Çalışma Türü Seçiniz'} </span>
                                        </DropdownToggle>
                                        <DropdownMenu center="true">
                                            <DropdownItem header>
                                                Çalışma Türleri
                                            </DropdownItem>
                                            {typesOfWorking.map(type => (
                                                <DropdownItem
                                                    key={type.id}
                                                    href="#"
                                                    onClick={() => setSelectedTypeOfWorking(type)}
                                                >
                                                    {type.typeName}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                </Col>
                                <Col lg="6" sm="6">
                                    <Input
                                        placeholder="Maksimum Maaş"
                                        type="text"
                                        name="maxSalary"
                                        value={values.maxSalary}
                                        min="1"
                                        pattern="^-?[0-9]\d*\.?\d*$"
                                        onChange={handleChange}
                                        required
                                    ></Input>

                                    <div style={{ margin: '20px 0 8px 0' }}>
                                        <Datetime
                                            name="endDate"
                                            timeFormat={false}
                                            locale="tr"
                                            inputProps={{ placeholder: "Son Başvuru Tarihi Giriniz" }}
                                            onChange={setSelectedDate}
                                            closeOnSelect
                                            isValidDate={disablePastDt}
                                        />
                                    </div>

                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            style={{ margin: '12px 0 0 -15px' }}
                                            caret
                                            color="neutral"
                                            href="#pablo"
                                            className="dropdown-text-color"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <span className="dropdown-text-color"> {selectedCity.cityName || 'Şehir Seçiniz'} </span>
                                        </DropdownToggle>
                                        <DropdownMenu center="true"
                                            style={{ overflowY: 'scroll', maxHeight: '300px' }}
                                        >
                                            <DropdownItem header>Şehirler</DropdownItem>
                                            {cities.map(city => (
                                                <DropdownItem
                                                    key={city.id}
                                                    onClick={() => setSelectedCity(city)}
                                                >
                                                    {city.cityName}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                    <UncontrolledDropdown>
                                        <DropdownToggle
                                            style={{ margin: '12px 0 0 -15px' }}
                                            caret
                                            color="neutral"
                                            href="#pablo"
                                            className="dropdown-text-color"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <span className="dropdown-text-color"> {selectedWorkingTime.workingTimeName || 'Çalışma Zamanı Seçiniz'} </span>
                                        </DropdownToggle>
                                        <DropdownMenu center="true">
                                            <DropdownItem header>
                                                Çalışma Zamanları
                                            </DropdownItem>
                                            {workingTimes.map(workingTime => (
                                                <DropdownItem
                                                    key={workingTime.id}
                                                    href="#"
                                                    onClick={() => setSelectedWorkingTime(workingTime)}
                                                >
                                                    {workingTime.workingTimeName}
                                                </DropdownItem>
                                            ))}
                                        </DropdownMenu>
                                    </UncontrolledDropdown>

                                </Col>

                                <hr style={{ margin: '1px 0 3px 0', padding: '0' }}></hr>
                                <Input
                                    style={{ height: '200px', margin: '19px 15px 0 20px' }}
                                    placeholder="Açıklama"
                                    type="textarea"
                                    name="jobDescription"
                                    id="jobDescription"
                                    value={values.jobDescription}
                                    onChange={handleChange}
                                    required
                                ></Input>
                            </Row>
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
