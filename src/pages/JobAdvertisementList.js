import JobAdvertisementFilter from 'layouts/JobAdvertisementFilter';
import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import {
    Button,
    Col,
    Card,
    CardHeader,
    Row,
    Badge,
    PaginationItem,
    PaginationLink,
    Pagination,
} from "reactstrap";
import FavouriteService from 'services/favouriteService';
import JobAdvertisementService from 'services/jobAdvertisementService';

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    const [filteredJobAdvertisements, setFilteredJobAdvertisements] = useState([])
    const [pages, setPages] = useState("1");
    const [pageSize, setPageSize] = useState("10");
    var favourite={candidate:{id:60}, jobAdvertisement:{id:0}}


    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(true).then(result => setJobAdvertisements(result.data.data))
        jobAdvertisementService.getAllByActiveAndPageable(true, 1, 10).then(result => setFilteredJobAdvertisements(result.data.data))
    }, [])

    function getAllButtonClicked() {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByIsActive(true).then(result => setFilteredJobAdvertisements(result.data.data))
        setPageSize("...")
    }

    function jobAdvertisementPage(pageSize, pageNo = 1) {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getAllByActiveAndPageable(true, pageNo, pageSize).then(result => setFilteredJobAdvertisements(result.data.data))
        setPageSize(pageSize)
    }

    const handleFilteredJobAdvertisement = (jobAdvertisement) => {
        if (jobAdvertisement.length === 0) {
            toast.warning("Aradığınız Kriterlere Uygun İlan Bulamadık ! Diğer İlanları Görüntülüyorsunuz")
            getAllButtonClicked();
        }
        else {
            setFilteredJobAdvertisements(jobAdvertisement)
        }
    }

    function favouriteAdd(jobAdvertisementId) {
        favourite.jobAdvertisement.id = jobAdvertisementId
        let favouriteService = new FavouriteService();
        favouriteService.add(favourite).then(toast.success("Favorilere Eklendi. Profilinize giderek favorilerinizi görüntüleyebilirsiniz."))
    }

    return (
        <>
            <h1 className="text-center text-muted">
                İş İlanları <br></br>
                <hr />
            </h1>
            <JobAdvertisementFilter jobAdvertisements={jobAdvertisements} getFilteredJobAdvertisement={handleFilteredJobAdvertisement} />
            <Row>
                {filteredJobAdvertisements.map(jobAdvertisement => (
                    <Col md="6" key={jobAdvertisement.id}>
                        <Card className="ds" style={{ borderRadius: '25px' }}>
                            <CardHeader>

                                <div className="team-player">
                                    <div className="mtx10">
                                        <div className="ds">
                                            <img
                                                alt="..."
                                                width="80px" height="auto"
                                                style={{ marginTop: '-25px' }}
                                                src={require("assets/img/file.png").default}
                                            ></img>
                                        </div>
                                        <div className="ds">
                                            <h4 className="modal-title">
                                                {jobAdvertisement.employer.companyName}
                                            </h4>
                                            <p className="category text-info">{jobAdvertisement.jobPosition.positionName} <Badge color="default">{jobAdvertisement.numberOfPosition}</Badge></p>
                                        </div>
                                        <div className="fl-r mt10">

                                            <Button className="btn-icon btn-round mr-3" outline color="info" type="button"onClick={() => favouriteAdd(jobAdvertisement.id)}>
                                                <i className="now-ui-icons ui-2_favourite-28"></i>
                                            </Button>

                                        </div>
                                    </div>
                                    <div className="mtx10 ds">
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Maaş :
                                            </h5>
                                            <span> {jobAdvertisement.minSalary} - {jobAdvertisement.maxSalary}₺</span>
                                        </div>
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Başvuru :
                                            </h5>
                                            <span className="ds"> {moment(jobAdvertisement.startDate).format("ll")} |
                                                {moment(jobAdvertisement.endDate).format(" ll")}</span>
                                        </div>
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Çalışma Şekli :
                                            </h5>
                                            <span> {jobAdvertisement.workingTime.workingTimeName}</span>
                                        </div>

                                        <h6 className="ml-xl-3">
                                            {jobAdvertisement.city.cityName}
                                        </h6>
                                    </div>
                                    <div className="ds fl-r position-absolute">
                                        <Button className="btn-round btn-info mr-3" color="info" type="button">
                                            <i className="now-ui-icons ui-1_zoom-bold mr5"></i>
                                            <span>İncele</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col>
                    <Pagination
                        className="pagination pagination-info mt-3"
                        listClassName="pagination-info"
                        style={{ margin: '0 auto' }}>

                        <PaginationItem className={pages === "1" ? "active" : ""}>
                            <PaginationLink onClick={() => { jobAdvertisementPage(10); setPages("1") }}>1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className={pages === "2" ? "active" : ""}>
                            <PaginationLink onClick={() => { jobAdvertisementPage(20); setPages("2") }}>2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className={pages === "3" ? "active" : ""}>
                            <PaginationLink onClick={() => { jobAdvertisementPage(50); setPages("3") }}>3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem className={pages === "4" ? "active" : ""}>
                            <PaginationLink onClick={() => { jobAdvertisementPage(100); setPages("4") }}>4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem className={pages === "5" ? "active" : ""}>
                            <PaginationLink onClick={() => { jobAdvertisementPage(150); setPages("5") }}>5</PaginationLink>
                        </PaginationItem>

                    </Pagination>
                    <div className="text-center mt-4">
                        <span><strong>{filteredJobAdvertisements.length} ({pageSize})</strong> adet kayıt listeliyorsunuz.</span>
                    </div>
                </Col>
            </Row>
            {filteredJobAdvertisements.length <= 10 &&
                <div className="text-center mt-4">
                    <Button
                        className="btn-round"
                        color="info"
                        outline
                        role="button"
                        size="lg"
                        onClick={() => getAllButtonClicked()}
                    >
                        Tümünü Gör
                    </Button>
                </div>
            }
        </>
    )
}
