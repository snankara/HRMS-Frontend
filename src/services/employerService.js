import axios from "axios";

export default class EmployerService{
    findById(id){
        return axios.get(`http://localhost:8080/api/employers/findById?id=${id}`);
    }

    findByVerifiedByEmployee(verifiedByEmployee){
        return axios.get(`http://localhost:8080/api/employers/findByVerifiedByEmployee?verifiedByEmployee=${verifiedByEmployee}`);
    }

    findByUpdateConfirmation(updateConfirmation){
        return axios.get(`http://localhost:8080/api/employers/findByUpdateConfirmation?updateConfirmation=${updateConfirmation}`);
    }

    confirmUpdate(employer){
        return axios.put("http://localhost:8080/api/employers/confirmUpdate",employer);
    }

    update(values){
        return axios.put("http://localhost:8080/api/employers/update",values);
    }

}