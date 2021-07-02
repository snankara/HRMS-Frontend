import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Badge, Button, Card, CardHeader, Col, Row } from 'reactstrap';
import FavouriteService from 'services/favouriteService';

export default function FavouritesList() {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        let favouriteService = new FavouriteService();
        favouriteService.findByCandidateId(60).then(result => setFavourites(result.data.data))
    }, []);

    function favouriteDelete(favouriteId) {
        let favouriteService = new FavouriteService();
        favouriteService.deleteById(favouriteId).then(toast.success("Favorilerden Çıkarıldı"))
    }
    return (
        <div style={{ display: 'inline-block' }}>
            <Row>
                {favourites.map(favourite => (
                    <Col key={favourite.id} md="6">
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
                                                {favourite.jobAdvertisement.employer.companyName}
                                            </h4>
                                            <p className="category text-info">{favourite.jobAdvertisement.jobPosition.positionName} <Badge color="default">{favourite.jobAdvertisement.numberOfPosition}</Badge></p>
                                        </div>
                                    </div>
                                    <div className="mtx10 ds">
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Maaş :
                                            </h5>
                                            <span> {favourite.jobAdvertisement.minSalary} - {favourite.jobAdvertisement.maxSalary}₺</span>
                                        </div>
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Başvuru :
                                            </h5>
                                            <span className="ds"> {moment(favourite.jobAdvertisement.startDate).format("ll")} |
                                                {moment(favourite.jobAdvertisement.endDate).format(" ll")}</span>
                                        </div>
                                        <div>
                                            <h5 className="ml-xl-3 ds">
                                                Çalışma Şekli :
                                            </h5>
                                            <span> {favourite.jobAdvertisement.workingTime.workingTimeName}</span>
                                        </div>

                                        <h6 className="ml-xl-3">
                                            {favourite.jobAdvertisement.city.cityName}
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
                            <Button className="btn btn-link ml-3 mb-3" color="danger" onClick={() => favouriteDelete(favourite.id)}>Favorilerden Çıkar</Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
