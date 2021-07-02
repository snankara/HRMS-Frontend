import React, { useEffect, useState } from 'react'
import { Button, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap'
import CityService from 'services/citySerivce'
import WorkingTimeService from 'services/workingTimeService'

export default function JobAdvertisementFilter(props) {

    const [cities, setCities] = useState([])
    const [workingTimes, setWorkingTimes] = useState([])

    var [selectedCity, setSelectedCity] = useState("")
    var [selectedWorkingTime, setSelectedWorkingTime] = useState("")
    useEffect(() => {
        let cityService = new CityService();
        cityService.getAll().then(result => setCities(result.data.data))

        let wokingTimeService = new WorkingTimeService();
        wokingTimeService.getAll().then(result => setWorkingTimes(result.data.data))
    }, [])

    function dataFilter() {

        var result = "";
        if(selectedCity && selectedWorkingTime !== "") {
            result = props.jobAdvertisements.filter(jobAdvertisement => jobAdvertisement.city.cityName.includes(selectedCity))
                .filter(jobAdvertisement => jobAdvertisement.workingTime.workingTimeName.includes(selectedWorkingTime))
        }

        if(selectedWorkingTime && !selectedCity){
            result = props.jobAdvertisements.filter(jobAdvertisement => jobAdvertisement.workingTime.workingTimeName.includes(selectedWorkingTime))
        }

        if(selectedCity && !selectedWorkingTime){
            result = props.jobAdvertisements.filter(jobAdvertisement => jobAdvertisement.city.cityName.includes(selectedCity))
        }
        props.getFilteredJobAdvertisement(result)
        setSelectedCity("")
        setSelectedWorkingTime("")
    }

    return (
        <div>
            <h5 className="text-left text-muted">
                Filtreleme Seçenekleriniz <br></br>
            </h5>

            <Row className="mb-5 ml-3">
                <UncontrolledDropdown className="mr-4">
                    <DropdownToggle
                        style={{ margin: '12px 0 0 -15px' }}
                        caret
                        color="neutral"
                        className="dropdown-text-color"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span className="dropdown-text-color"> {selectedCity || 'Şehir Seçiniz'} </span>
                    </DropdownToggle>
                    <DropdownMenu center="true"
                        style={{ overflowY: 'scroll', maxHeight: '300px' }}
                    >
                        <DropdownItem header>Şehirler</DropdownItem>
                        {cities.map(city => (
                            <DropdownItem
                                key={city.id}
                                onClick={() => setSelectedCity(city.cityName)}
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
                        className="dropdown-text-color"
                        onClick={(e) => e.preventDefault()}
                    >
                        <span className="dropdown-text-color"> {selectedWorkingTime || 'Çalışma Zamanı Seçiniz'} </span>
                    </DropdownToggle>
                    <DropdownMenu center="true">
                        <DropdownItem header>
                            Çalışma Zamanları
                        </DropdownItem>
                        {workingTimes.map(workingTime => (
                            <DropdownItem
                                key={workingTime.id}
                                onClick={() => setSelectedWorkingTime(workingTime.workingTimeName)}
                            >
                                {workingTime.workingTimeName}
                            </DropdownItem>
                        ))}
                    </DropdownMenu>
                </UncontrolledDropdown>
                <Button
                color="info"
                type="button"
                outline
                className="btn-round ml-4"
                onClick={() => dataFilter()}
            >
                <span style={{fontSize:'12px'}}>Filtrele</span>
            </Button>
            </Row>

        </div>
    )
}
