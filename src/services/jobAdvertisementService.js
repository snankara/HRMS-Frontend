import axios from 'axios'

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", values)
    }

    getByIsActive(isActive){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getByIsActive?isActive=${isActive}`);
    }

    activateJobAdvertisement(jobAdvertisement){
        return axios.put(`http://localhost:8080/api/jobAdvertisements/activateJobAdvertisement`,jobAdvertisement)
    }

    getAllByActiveAndPageable(isActive, pageNo, pageSize){
        return axios.get(`http://localhost:8080/api/jobAdvertisements/getAllByActiveAndPageable?isActive=${isActive}&pageNo=${pageNo}&pageSize=${pageSize}`)
    }
}
